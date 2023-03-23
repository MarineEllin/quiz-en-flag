import { Constants } from "constants/constants";
import { atom, selector } from "recoil";
import { countries } from "../assets/datas/countries";

//Countries and answers

export const countriesState = atom({
  key: "countriesState",
  default: countries,
});

export const selectedCountry = selector({
  key: "selectedCountry",
  get: ({ get }) => {
    const [...countriesList] = get(countriesState);
    const shuffledCountries = countriesList.sort((a, b) => 0.5 - Math.random());
    return shuffledCountries[0];
  },
});

export const possibleAnswersState = selector({
  key: "possibleAnswersState",
  get: ({ get }) => {
    const country = get(selectedCountry);
    const countriesWithoutCountrySelectect = countries.filter(
      (c) => c !== country
    );
    const shuffledArray = countriesWithoutCountrySelectect.sort(
      (a, b) => 0.5 - Math.random()
    );
    const possibleAnswers = [
      shuffledArray[0][1],
      shuffledArray[1][1],
      country[1],
    ];
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
