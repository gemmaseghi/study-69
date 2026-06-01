<template>
  <Screen>

    <div v-if="step === 1" class="probe-screen">
      <h2>Hidden cell question</h2>

      <p>
        Do you think you have enough information to identify the cell that is
        hidden from the speaker?
      </p>

      <div class="button-container">
        <button @click="answerNo">
          No
        </button>

        <button @click="step = 2">
          Yes
        </button>
      </div>
    </div>

    <div v-if="step === 2">
      <h2>Select the hidden cell</h2>

      <p>
        Please select the cell that you think is hidden from the speaker.
      </p>

      <div class="grid-wrapper">
        <img :src="gridImage" class="stimulus" />

        <button class="cell top-left" @click="selectCell('topLeft')" />
        <button class="cell top-right" @click="selectCell('topRight')" />
        <button class="cell bottom-left" @click="selectCell('bottomLeft')" />
        <button class="cell bottom-right" @click="selectCell('bottomRight')" />
      </div>
    </div>

  </Screen>
</template>

<script>
export default {
  name: "BlindSpotProbe",
  props: {
    probeId: Number,
    gridImage: {
      type: String,
      default: "stimuli/empty_grid.png"
    },
    correctBlindSpot: String
  },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    answerNo() {
      this.$magpie.addTrialData({
        trial_type: "blindspot_probe",
        probe_id: this.probeId,
        has_enough_information: "no",
        blindspot_response: null,
        correct_blindspot: this.correctBlindSpot,
        correct: null
      });

      this.$magpie.nextScreen();
    },
    selectCell(cell) {
      this.$magpie.addTrialData({
        trial_type: "blindspot_probe",
        probe_id: this.probeId,
        has_enough_information: "yes",
        blindspot_response: cell,
        correct_blindspot: this.correctBlindSpot,
        correct: cell === this.correctBlindSpot
      });

      this.$magpie.nextScreen();
    }
  }
};
</script>

<style scoped>
.grid-wrapper {
  position: relative;
  width: 500px;
  margin: 30px auto;
  line-height: 0;
}

.stimulus {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
}

.probe-screen {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.cell {
  position: absolute;
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  opacity: 0;
  cursor: pointer;
}

.top-left {
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
}

.top-right {
  top: 0;
  left: 50%;
  width: 50%;
  height: 50%;
}

.bottom-left {
  top: 50%;
  left: 0;
  width: 50%;
  height: 50%;
}

.bottom-right {
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
}

.button-container button {
  margin: 10px;
}
</style>