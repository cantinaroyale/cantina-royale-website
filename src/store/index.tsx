import React, { createContext, useContext, useEffect, useState } from "react";
import { APP_LOADER_TIMEOUT } from "../consts";

interface IState {
  activeScreen: number;
  setActiveScreen: (val: number) => void;
  selectScreen: (val: number) => void;
  appLoaded: boolean;
  fromTransitionIndex: number;
  setFromTransitionIndex: (val: number) => void;
  ToTransitionIndex: number;
  setToTransitionIndex: (val: number) => void;
}

const StoreContext = createContext<IState>({} as IState);

interface IProps {
  children: React.ReactNode;
}

const Store = ({ children }: IProps) => {
  const [activeScreen, setActiveScreen] = useState(0);
  const [appLoaded, setAppLoaded] = useState(false);
  const [fromTransitionIndex, setFromTransitionIndex] = useState(0);
  const [ToTransitionIndex, setToTransitionIndex] = useState(0);
  const selectScreen = (index: number) => {
    setActiveScreen(index);
  };

  const value = {
    activeScreen,
    setActiveScreen,
    selectScreen,
    appLoaded,
    fromTransitionIndex,
    setFromTransitionIndex,
    ToTransitionIndex,
    setToTransitionIndex,
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
