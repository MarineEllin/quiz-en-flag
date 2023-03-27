import { Constants } from "constants/constants";
import { atom, selector } from "recoil";
import { countries } from "../assets/datas/countries";

//Countries and answers

export const countriesState = atom({
  key: "countriesState",
  default: countries,
});

export const selectedCountryState = selector({
  key: "selectedCountryState",
  get: ({ get }) => {
    const [...countries] = get(countriesState);
    const selectedCountrie =
      countries[Math.floor(countries.length * Math.random())];
    return selectedCountrie;
  },
});

export const possibleAnswersState = selector({
  key: "possibleAnswersState",
  get: ({ get }) => {
    const selectedCountry = get(selectedCountryState);

    const answer1 = [...countries].filter((c) => c !== selectedCountry)[
      Math.floor(countries.length * Math.random())
    ];

    const answer2 = [...countries].filter(
      (c) => c !== selectedCountry && c !== answer1
    )[Math.floor(countries.length * Math.random())];

    const possibleAnswers = [selectedCountry, answer1, answer2];
    const shuffledPossibleAnswers = possibleAnswers.sort(
      (a, b) => 0.5 - Math.random()
    );
    return shuffledPossibleAnswers;
  },
});

export const displayRightAnswerState = atom({
  key: "displayRightAnswerState",
  default: false,
});

// Timer

export const timerProgressState = atom({
  key: "timerProgressState",
  default: Constants.TIMER_GAME_IN_MS,
});

export const addTimeRightAnswerState = atom({
  key: "addTimeRightAnswerState",
  default: false,
});

export const timeoutState = atom({
  key: "timeoutState",
  default: false,
});

// Display loading page

export const loadingGameState = atom({
  key: "loadingGameState",
  default: true,
});

// Score

export const scoreState = atom({
  key: "scoreState",
  default: 0,
});

// Flags In & Out

export const animateFlagsState = atom({
  key: "animateFlags",
  default: false,
});

export const animateAnswersState = atom({
  key: "animateAnswersState",
  default: false,
});
