import { useCallback, useEffect, useRef, useState } from "react";
import { MainVideo } from "../../components";
import {
  MAIN_TRANSITION_NUMBER,
  transitionDirection,
  directions,
} from "../../consts";
import { screensImages } from "../../data/screens";
import { useStore } from "../../store";
const GLTransitions = require("gl-transitions");

let images: any = screensImages;
// images[0] = <MainVideo />;
const baseTransition = GLTransitions[MAIN_TRANSITION_NUMBER];
function useController() {
  const { activeScreen, setTransitionInProgress } = useStore();
  const currentScreen = useRef(-1);
  const intervalRef: any = useRef(null);
  const [progress, setProgress] = useState(0);
  const [fromIndex, setFromIndex] = useState(0);
  const [toIndex, setToIndex] = useState(1);
  const [transition, setTransition] = useState(baseTransition);

  const onTransitionEnded = useCallback(
    (screen) => {
      setTransitionInProgress(false);
      stopTransition();
      setFromIndex(screen);
    },
    [setTransitionInProgress]
  );

  const startTransition = useCallback(
    async (screen, isVideo) => {
      if (!isVideo) {
        setTransitionInProgress(true);
      }
      let start = 0;
      if (isVideo) {
        setTimeout(() => {
          setFromIndex(screen);
        }, 100);
      }
      const interval = isVideo ? 12 : 8;
      const limit = isVideo ? 1000000 : 1;
      intervalRef.current = setInterval(() => {
        if (start < limit) {
          start += 0.01;
          setProgress(start);
        } else {
          onTransitionEnded(screen);
        }
      }, interval);
    },
    [onTransitionEnded, setTransitionInProgress]
  );

  const onScroll = useCallback(
    (screen, direction, isVideo) => {
      setTransition((prevState: any) => {
        prevState.defaultParams.direction = directions[direction];
        return prevState;
      });

      setToIndex(screen);
      startTransition(screen, isVideo);
    },
    [startTransition]
  );

  const handleProgress = useCallback(
    (screen) => {
      if (progress === 0) {
        return;
      }
      if (currentScreen.current === 0) {
        stopTransition();
      } else {
        onTransitionEnded(screen);
      }
    },
    [onTransitionEnded, progress]
  );

  useEffect(() => {
    if (activeScreen === currentScreen.current) {
      return;
    }

    const isVideo = false;

    handleProgress(activeScreen);
    if (activeScreen > currentScreen.current) {
      onScroll(activeScreen, transitionDirection.next, isVideo);
    } else {
      onScroll(activeScreen, transitionDirection.prev, isVideo);
    }
    currentScreen.current = activeScreen;
  }, [onScroll, activeScreen, progress, onTransitionEnded, handleProgress]);

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
