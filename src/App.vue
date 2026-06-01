<template>
  <Experiment title="Perspective-taking experiment">
    <InstructionScreen :title="'Welcome'">
      Welcome to the experiment. Please move to the next screen to read the instructions. 
    </InstructionScreen>

    <InstructionScreen :title="'Instructions'">
      In this experiment, you will play the role of the listener in a game with another participant, who will instead play the role of the speaker.
      <br><br>

      On each trial, you will see a grid containing four objects and a description above it. 
      <br><br>
      The speaker sees a slightly different version of the grid. Their grid contains only three objects because one cell is hidden by an occluder. The location of the hidden cell remains the same throughout the experiment. 
      Apart from the hidden object, both grids contain the same objects. However, the position of the visible objects is shuffled across the two grids, so the speaker cannot use location words (e.g., "top left" or "bottom right") to refer to an object.
      <br><br>
      On the speaker's screen, one of the visible objects is marked with an asterisk (*). The speaker's task is to describe that object. Your task is to use the description, which will appear above the grid, to determine which object the speaker intended to refer to and select it. In some cases, you might not have enough information to identify a single object. When this happens, there will be at most two objects that are compatible with the speaker's description. In that case, please select both of them. Once you have clicked on both possible objects, you will be directed to the following screen.
      <br><br>
      Occasionally, you will be asked whether you think you have enough information to determine which cell is hidden from the speaker. If you believe you have enough information, you will be asked to select the hidden cell in an empty grid.
      Later in the experiment, the speaker's blind spot will be revealed and marked in grey. After that, continue selecting the object you think the speaker is referring to.
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

    <GridTrial
      v-for="trial in trials.slice(0, 5)"
      :key="trial.id"
      :trial="trial"
    />

    <BlindSpotProbe
      :probeId="1"
      correctBlindSpot="bottomRight"
    />

    <GridTrial
      v-for="trial in trials.slice(5, 10)"
      :key="trial.id"
      :trial="trial"
    />

    <BlindSpotProbe
      :probeId="2"
      correctBlindSpot="bottomRight"
    />

    <GridTrial
      v-for="trial in trials.slice(10, 15)"
      :key="trial.id"
      :trial="trial"
    />

    <BlindSpotProbe
      :probeId="3"
      correctBlindSpot="bottomRight"
    />

    <GridTrial
      v-for="trial in trials.slice(15, 20)"
      :key="trial.id"
      :trial="trial"
    />

    <BlindSpotProbe
      :probeId="4"
      correctBlindSpot="bottomRight"
    />

    <GridTrial
      v-for="trial in trials.slice(20)"
      :key="trial.id"
      :trial="trial"
    />

    <Questionnaire />

    <SubmitResultsScreen />
  </Experiment>
</template>

<script>
import _ from "lodash";
import trials from "./trials";
import GridTrial from "./GridTrial.vue";
import Questionnaire from "./Questionnaire.vue";
import BlindSpotProbe from "./BlindSpotProbe.vue";

export default {
  name: "App",
  components: {
    GridTrial,
    BlindSpotProbe,
    Questionnaire
  },
  data() {
    return {
      trials
    };
  },
  computed: {
    _() {
      return _;
    }
  }
};
</script>