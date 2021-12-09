const transitionDirection = {
  next: "next",
  prev: "prev",
};

const directions = {
  [transitionDirection.next]: [0, -1],
  [transitionDirection.prev]: [0, 1],
};

const SCROLL_DURATION = 1100;
const MAIN_TRANSITION_NUMBER = 34;
const FIRST_TRANSITION_NUMBER = 1;
const APP_LOADER_TIMEOUT = 4500;
const UNITY_INTERVAL = 3000;

export {
  transitionDirection,
  SCROLL_DURATION,
  MAIN_TRANSITION_NUMBER,
  APP_LOADER_TIMEOUT,
  directions,
  UNITY_INTERVAL,
  FIRST_TRANSITION_NUMBER,
};
