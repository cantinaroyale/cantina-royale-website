import { useCallback, useEffect, useRef, useState } from "react";
import {
  MAIN_TRANSITION_NUMBER,
  transitionDirection,
  directions,
} from "../../consts";
import { screensImages } from "../../data/screens";
import { useStore } from "../../store";
const GLTransitions = require("gl-transitions");

const baseTransition = GLTransitions[MAIN_TRANSITION_NUMBER];
function useController() {
  const { activeScreen, fromTransitionIndex, ToTransitionIndex } = useStore();
  const currentScreen = useRef(0);
  const intervalRef: any = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(1);
  const [transition, setTransition] = useState(baseTransition);
  const onTransitionEnded = useCallback((direction) => {
    stopTransition();
    if (direction === transitionDirection.next) {
      setFromIndex((prevState) => prevState + 1);
      setToIndex((prevState) => prevState + 1);
    } else {
      setFromIndex((prevState) => prevState - 1);
      setToIndex((prevState) => prevState + 1);
    }
  }, []);

  const startTransition = useCallback(
    (direction) => {
      const transitionIsRunning = progress !== 0;
      if (transitionIsRunning) {
        return;
      }
      let start = 0;
      intervalRef.current = setInterval(() => {
        if (start < 1) {
          start += 0.01;
          setProgress(start);
        } else {
          onTransitionEnded(direction);
        }
      }, 8);
    },
    [onTransitionEnded, progress]
  );

  const onScroll = useCallback(
    (direction) => {
      if (progress > 0) {
        return;
      }
      setTransition((prevState: any) => {
        prevState.defaultParams.direction = directions[direction];
        return prevState;
      });
      if (direction === transitionDirection.prev) {
        setToIndex((prevState) => prevState - 2);
      }
      startTransition(direction);
    },
    [progress, startTransition]
  );

  useEffect(() => {
    if (activeScreen === currentScreen.current) {
      return;
    }
    if (activeScreen > currentScreen.current) {
      onScroll(transitionDirection.next);
    } else {
      onScroll(transitionDirection.prev);
    }
    currentScreen.current = activeScreen;
  }, [onScroll, activeScreen]);

  const stopTransition = () => {
    clearInterval(intervalRef.current);
    setProgress(0);
  };

  return {
    fromIndex,
    toIndex,
    progress,
    onScroll,
    stopTransition,
    transition,
    transitions: GLTransitions,
    setTransition,
    images: screensImages,
  };
}

export default useController;
