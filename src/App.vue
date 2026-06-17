<template>
  <Experiment title="Perspective-taking experiment">
    <InstructionScreen :title="'Welcome'">
      Welcome to the experiment! You will first read a set of instructions. The instructions are divided into four parts. Please move to the next screen to read the first part.
    </InstructionScreen>

    <InstructionScreen :title="'Instructions'">
      In this experiment, you will play a game with another participant. You will play the role of the listener, while the other participant will play the role of the speaker. 
      <br><br>
      On each trial, you will see a grid containing four objects and a description above it. The description is produced by the speaker to indicate one of the objects in the grid. You will only be presented the speaker's description in written form, you won't hear it spoken aloud.
      
    </InstructionScreen>

    <InstructionScreen :title="'Instructions'">
      The speaker sees a slightly different version of the grid. Their grid contains only three objects because one cell is hidden by an occluder. The location of the hidden cell remains the same throughout the experiment.

      <br><br>

      Apart from the hidden object, both grids contain the same objects. However, the position of the visible objects is shuffled across the two grids, so the speaker cannot use location words (e.g., "top left" or "bottom right") to refer to an object.
    
    </InstructionScreen>

    <InstructionScreen :title="'Instructions'">
      On the speaker's screen, one of the visible objects is marked with an asterisk (*). The speaker's task is to describe that object. Your task is to use the description, which will appear above the grid, to determine which object the speaker intended to refer to and select it.

      <br><br>
      
      In some cases, you might not have enough information to identify a single object. When this happens, please select only the object that you think is the most likely candidate based on the information you have.
      
    </InstructionScreen>
    <InstructionScreen :title="'Instructions'">
      Occasionally, you will be asked whether you think you have enough information to determine which cell is hidden from the speaker. If you believe you have enough information, you will be asked to select the hidden cell in an empty grid. 

      <br><br>

      If you correctly identify the hidden cell, that cell will be marked in grey for the remainder of the experiment, so you can use that information to guide your selections in the remaining trials. Continue selecting the object you think the speaker is referring to until the end of the experiment.
      <br><br>
      At the end of the experiment, you will be asked to complete a short questionnaire.
    </InstructionScreen>

    <InstructionScreen :title="'Example'">
      <img
        src="instructions/example_view.png"
        style="width: 800px; max-width: 100%;"
      />

      <p>
        Example of the speaker's view (left) and your view (right).
        The grey cell indicates the object that is hidden from the speaker.
        The asterisk (*) marks the object that the speaker has to describe.
      </p>

      <p>
        During the experiment, you will only see the right view. The speaker's view is shown here only to illustrate how the game works.
        Your task is to click on the object that you think the speaker is referring to and to infer which cell is hidden from them.
      </p>
    </InstructionScreen>

    <PracticeBlock
      :practiceTrials="practiceTrials"
      correctBlindSpot="topLeft"
    />

    <component
      v-for="screen in experimentScreens"
      :key="screen.key"
      :is="screen.component"
      v-bind="screen.props"
      @solved-blindspot="markBlindSpotSolved"
      @blindspot-answer="handleRealBlindspotAnswer"
    />

    <InstructionScreen
      v-if="experimentTerminated"
      :title="'Experiment ended'"
    >
      I am sorry, but you did not identify the correct hidden cell.
      The experiment ends here.
    </InstructionScreen>

    <Questionnaire v-if="!experimentTerminated" />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import _ from "lodash";
import trials from "./trials";
import practiceTrials from "./practiceTrials";
import GridTrial from "./GridTrial.vue";
import BlindSpotProbe from "./BlindSpotProbe.vue";
import Questionnaire from "./Questionnaire.vue";
import PracticeBlock from "./PracticeBlock.vue";
import FinalBlindSpotProbe from "./FinalBlindSpotProbe.vue";

export default {
  name: "App",
  components: {
    GridTrial,
    PracticeBlock,
    BlindSpotProbe,
    FinalBlindSpotProbe,
    Questionnaire
  },
  data() {
    return {
      trials,
      practiceTrials,
      blindSpotSolved: false,
      experimentTerminated: false
    };
  },
  computed: {
    _() {
      return _;
    },

    experimentScreens() {
      const screens = [];

      const blindspotTrials = this.trials.filter(
        trial => trial.phase === "blindspot"
      );

      const suspiciousnessTrials = this.trials.filter(
        trial => trial.phase === "susp"
      );

      // Always include the blindspot trials/probes in the screen sequence.
      // If the blind spot has already been solved, they will auto-skip.
      screens.push(
        ...blindspotTrials.slice(0, 5).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-1",
        component: BlindSpotProbe,
        props: {
          probeId: 1,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(5, 10).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-2",
        component: BlindSpotProbe,
        props: {
          probeId: 2,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(10, 15).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-3",
        component: BlindSpotProbe,
        props: {
          probeId: 3,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      screens.push(
        ...blindspotTrials.slice(15, 20).map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.blindSpotSolved
          }
        }))
      );

      screens.push({
        key: "probe-4",
        component: FinalBlindSpotProbe,
        props: {
          probeId: 4,
          correctBlindSpot: "bottomRight",
          skip: this.blindSpotSolved
        }
      });

      // Always show all suspiciousness trials.
      screens.push(
        ...suspiciousnessTrials.map(trial => ({
          key: `trial-${trial.id}`,
          component: GridTrial,
          props: {
            trial,
            skip: this.experimentTerminated
          }
        }))
      );

      return screens;
    }
  },
  methods: {
    markBlindSpotSolved() {
      this.blindSpotSolved = true;
    },

    handleRealBlindspotAnswer(answer) {
      if (answer.probeId === 4 && !answer.correct) {
        this.experimentTerminated = true;
      }
    }
  }
};
</script>