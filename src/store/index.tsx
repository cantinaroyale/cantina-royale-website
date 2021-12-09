import React, { createContext, useContext, useEffect, useState } from "react";
import { APP_LOADER_TIMEOUT } from "../consts";

interface IState {
  activeScreen: number;
  setActiveScreen: (val: number) => void;
  selectScreen: (val: number) => void;
  appLoaded: boolean;
  transitionInProgress: boolean;
  setTransitionInProgress: (val: boolean) => void;
}

const StoreContext = createContext<IState>({} as IState);

interface IProps {
  children: React.ReactNode;
}

const Store = ({ children }: IProps) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [appLoaded, setAppLoaded] = useState(false);
  const [transitionInProgress, setTransitionInProgress] = useState(false);

  const selectScreen = (index: number) => {
    if (!transitionInProgress) {
      setActiveScreen(index);
    }
  };
  console.log(transitionInProgress);

  const value = {
    activeScreen,
    setActiveScreen,
    selectScreen,
    appLoaded,
    transitionInProgress,
    setTransitionInProgress,
  };

  useEffect(() => {
    setTimeout(() => {
      setAppLoaded(true);
    }, APP_LOADER_TIMEOUT);
  }, []);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
const useStore = () => useContext(StoreContext);
export { Store, useStore };
