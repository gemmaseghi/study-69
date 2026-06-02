const trials = [
{
    id: 1,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_01.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 2,
    phase: "blindspot",
    condition: "trial2size",
    utterance: "The umbrella",
    item: "red umbrella",
    image: "stimuli/trial_02.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight", "bottomRight"],
    maxSelections: 1
  },
  
{
    id: 3,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The flower",
    item: "red flower",
    image: "stimuli/trial_03.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 4,
    phase: "blindspot",
    condition: "trial3color",
    utterance: "The green chair",
    item: "green chair",
    image: "stimuli/trial_04.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 5,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The clock",
    item: "red clock",
    image: "stimuli/trial_05.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 6,
    phase: "blindspot",
    condition: "trial3color",
    utterance: "The yellow book",
    item: "yellow book",
    image: "stimuli/trial_06.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 7,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The fish",
    item: "blue fish",
    image: "stimuli/trial_07.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 8,
    phase: "blindspot",
    condition: "trial2color",
    utterance: "The shoe",
    item: "blue shoe",
    image: "stimuli/trial_08.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft", "bottomRight"],
    maxSelections: 1
  },

{
    id: 9,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The pen",
    item: "orange pen",
    image: "stimuli/trial_09.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 10,
    phase: "blindspot",
    condition: "trial4size",
    utterance: "The small flower",
    item: "small red flower",
    image: "stimuli/trial_10.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 11,
    phase: "blindspot",
    condition: "trial2size",
    utterance: "The apple",
    item: "red apple",
    image: "stimuli/trial_11.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft", "bottomRight"],
    maxSelections: 1
  },

{
    id: 12,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_12.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 13,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The cat",
    item: "cat",
    image: "stimuli/trial_13.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 14,
    phase: "blindspot",
    condition: "filler1",
    utterance: "The big dog",
    item: "dog",
    image: "stimuli/trial_14.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 15,
    phase: "blindspot",
    condition: "baseline",
    utterance: "The car",
    item: "red car",
    image: "stimuli/trial_15.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 16,
    phase: "blindspot",
    condition: "trial4color",
    utterance: "The blue chair",
    item: "blue chair",
    image: "stimuli/trial_16.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 17,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The duck",
    item: "duck",
    image: "stimuli/trial_17.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 18,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The tree",
    item: "tree",
    image: "stimuli/trial_18.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 19,
    phase: "blindspot",
    condition: "trial2color",
    utterance: "The umbrella",
    item: "yellow umbrella",
    image: "stimuli/trial_19.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 20,
    phase: "blindspot",
    condition: "trial1",
    utterance: "The shoe",
    item: "red shoe",
    image: "stimuli/trial_20.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 21,
    phase: "susp",
    condition: "filler1",
    utterance: "The umbrella",
    item: "red umbrella",
    image: "stimuli/trial_21.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 22,
    phase: "susp",
    condition: "critical",
    utterance: "The orange fish",
    item: "orange fish",
    image: "stimuli/trial_22.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 23,
    phase: "susp",
    condition: "filler2size",
    utterance: "The small clock",
    item: "small red clock",
    image: "stimuli/trial_23.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1  
  },

{
    id: 24,
    phase: "susp",
    condition: "critical",
    utterance: "The blue book",
    item: "blue book",
    image: "stimuli/trial_24.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 25,
    phase: "susp",
    condition: "critical",
    utterance: "The red shoe",
    item: "red shoe",
    image: "stimuli/trial_25.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],  
    maxSelections: 1
  },

{
    id: 26,
    phase: "susp",
    condition: "filler1",
    utterance: "The pen",
    item: "blue pen",
    image: "stimuli/trial_26.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 27,
    phase: "susp",
    condition: "filler2color",
    utterance: "The orange cup",
    item: "orange cup",
    image: "stimuli/trial_27.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 28,
    phase: "susp",
    condition: "critical",
    utterance: "The green chair",
    item: "green chair",
    image: "stimuli/trial_28.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 29,
    phase: "susp",
    condition: "filler2color",
    utterance: "The red apple",
    item: "red apple",
    image: "stimuli/trial_29.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 30,
    phase: "susp",
    condition: "critical",
    utterance: "The blue clock",
    item: "blue clock",
    image: "stimuli/trial_30.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  },

{
    id: 31,
    phase: "susp",
    condition: "filler1",
    utterance: "The house",
    item: "house",
    image: "stimuli/trial_31.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 32,
    phase: "susp",
    condition: "critical",
    utterance: "The yellow umbrella",
    item: "yellow umbrella",
    image: "stimuli/trial_32.png",
    greyCell: "bottomRight",
    correctAnswer: ["bottomLeft"],
    maxSelections: 1
  },

{
    id: 33,
    phase: "susp",
    condition: "filler2size",
    utterance: "The small tree",
    item: "small tree",
    image: "stimuli/trial_33.png",
    greyCell: "bottomRight",
    correctAnswer: ["topRight"],
    maxSelections: 1
  },

{
    id: 34,
    phase: "susp",
    condition: "critical",
    utterance: "The red flower",
    item: "red flower",
    image: "stimuli/trial_34.png",
    greyCell: "bottomRight",
    correctAnswer: ["topLeft"],
    maxSelections: 1
  }

];

export default trials;