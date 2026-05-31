<template>
  <Screen>
    <h2 class="utterance">{{ trial.utterance }}</h2>

    <div class="grid-wrapper">
      <img :src="trial.image" class="stimulus" />

      <button class="cell top-left" @click="selectCell('topLeft')" />
      <button class="cell top-right" @click="selectCell('topRight')" />
      <button class="cell bottom-left" @click="selectCell('bottomLeft')" />
      <button class="cell bottom-right" @click="selectCell('bottomRight')" />
    </div>
  </Screen>
</template>

<script>
export default {
  name: "GridTrial",
  props: {
    trial: Object
  },
  methods: {
    selectCell(answer) {
      this.$magpie.addTrialData({
        trial_id: this.trial.id,
        phase: this.trial.phase,
        condition: this.trial.condition,
        utterance: this.trial.utterance,
        image: this.trial.image,
        grey_cell: this.trial.greyCell,
        correct_answer: this.trial.correctAnswer,
        response: answer,
        correct: answer === this.trial.correctAnswer
      });

      this.$magpie.nextScreen();
    }
  }
};
</script>

<style scoped>
.utterance {
  text-align: center;
  margin-bottom: 30px;
}

.grid-wrapper {
  position: relative;
  width: 500px;
  margin: 0 auto;
  line-height: 0;
}

.stimulus {
  width: 100%;
  display: block;
  margin: 0;
  padding: 0;
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

.cell:hover {
  opacity:0;
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
</style>