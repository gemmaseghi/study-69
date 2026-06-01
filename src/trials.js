const trials = [
{
    id: 1,
    phase: "cg",
    condition: "filler2color",
    utterance: "The red chair",
    item: "red chair",
    image: "stimuli/trial_01.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 2,
    phase: "cg",
    condition: "filler1",
    utterance: "The tree",
    item: "tree",
    image: "stimuli/trial_02.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },
  
{
    id: 3,
    phase: "cg",
    condition: "baseline",
    utterance: "The dog",
    item: "dog",
    image: "stimuli/trial_03.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 4,
    phase: "cg",
    condition: "filler1",
    utterance: "The pen",
    item: "green pen",
    image: "stimuli/trial_04.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 5,
    phase: "cg",
    condition: "filler2size",
    utterance: "The small umbrella",
    item: "small red umbrella",
    image: "stimuli/trial_05.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 6,
    phase: "cg",
    condition: "filler1",
    utterance: "The flower",
    item: "red flower",
    image: "stimuli/trial_06.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 7,
    phase: "cg",
    condition: "baseline",
    utterance: "The shoe",
    item: "red shoe",
    image: "stimuli/trial_07.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 8,
    phase: "cg",
    condition: "filler2color",
    utterance: "The red apple",
    item: "red apple",
    image: "stimuli/trial_08.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 9,
    phase: "cg",
    condition: "filler1",
    utterance: "The fish",
    item: "orange fish",
    image: "stimuli/trial_09.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 10,
    phase: "cg",
    condition: "baseline",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_10.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 11,
    phase: "cg",
    condition: "filler2size",
    utterance: "The small cup",
    item: "small bluecup",
    image: "stimuli/trial_11.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 12,
    phase: "cg",
    condition: "filler2color",
    utterance: "The yellow flower",
    item: "yellow flower",
    image: "stimuli/trial_12.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 13,
    phase: "cg",
    condition: "baseline",
    utterance: "The book",
    item: "green book",
    image: "stimuli/trial_13.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 14,
    phase: "cg",
    condition: "filler1",
    utterance: "The car",
    item: "red car",
    image: "stimuli/trial_14.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 15,
    phase: "cg",
    condition: "baseline",
    utterance: "The duck",
    item: "duck",
    image: "stimuli/trial_15.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 16,
    phase: "cg",
    condition: "filler2size",
    utterance: "The small cat",
    item: "small cat",
    image: "stimuli/trial_16.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 17,
    phase: "cg",
    condition: "filler1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_17.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 18,
    phase: "cg",
    condition: "baseline",
    utterance: "The pen",
    item: "greenpen",
    image: "stimuli/trial_18.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 19,
    phase: "cg",
    condition: "filler1",
    utterance: "The chair",
    item: "red chair",
    image: "stimuli/trial_19.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 20,
    phase: "cg",
    condition: "baseline",
    utterance: "The car",
    item: "yellowcar",
    image: "stimuli/trial_20.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 21,
    phase: "susp",
    condition: "filler1",
    utterance: "The umbrella",
    item: "red umbrella",
    image: "stimuli/trial_21.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 22,
    phase: "susp",
    condition: "critical",
    utterance: "The orange fish",
    item: "orange fish",
    image: "stimuli/trial_22.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 23,
    phase: "susp",
    condition: "filler2size",
    utterance: "The small clock",
    item: "small red clock",
    image: "stimuli/trial_23.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 24,
    phase: "susp",
    condition: "critical",
    utterance: "The blue book",
    item: "blue book",
    image: "stimuli/trial_24.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 25,
    phase: "susp",
    condition: "critical",
    utterance: "The red shoe",
    item: "red shoe",
    image: "stimuli/trial_25.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 26,
    phase: "susp",
    condition: "filler1",
    utterance: "The pen",
    item: "blue pen",
    image: "stimuli/trial_26.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 27,
    phase: "susp",
    condition: "filler2color",
    utterance: "The orange cup",
    item: "orange cup",
    image: "stimuli/trial_27.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 28,
    phase: "susp",
    condition: "critical",
    utterance: "The green chair",
    item: "green chair",
    image: "stimuli/trial_28.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 29,
    phase: "susp",
    condition: "filler2color",
    utterance: "The red apple",
    item: "red apple",
    image: "stimuli/trial_29.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 30,
    phase: "susp",
    condition: "critical",
    utterance: "The blue clock",
    item: "blue clock",
    image: "stimuli/trial_30.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  },

{
    id: 31,
    phase: "susp",
    condition: "filler1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_31.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 32,
    phase: "susp",
    condition: "critical",
    utterance: "The yellow umbrella",
    item: "yellow umbrella",
    image: "stimuli/trial_32.png",
    greyCell: "bottomRight",
    correctAnswer: "bottomLeft"
  },

{
    id: 33,
    phase: "susp",
    condition: "filler2size",
    utterance: "The small tree",
    item: "small tree",
    image: "stimuli/trial_33.png",
    greyCell: "bottomRight",
    correctAnswer: "topRight"
  },

{
    id: 34,
    phase: "susp",
    condition: "critical",
    utterance: "The red flower",
    item: "red flower",
    image: "stimuli/trial_34.png",
    greyCell: "bottomRight",
    correctAnswer: "topLeft"
  }

];

export default trials;