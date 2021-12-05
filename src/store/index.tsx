import React, { createContext, useContext, useState } from "react";

interface IState {
  activeScreen: number;
  setActiveScreen: (val: number) => void;
  selectScreen: (val: number) => void;
}

const StoreContext = createContext<IState>({} as IState);

interface IProps {
  children: React.ReactNode;
}

const Store = ({ children }: IProps) => {
  const [activeScreen, setActiveScreen] = useState(0);

  const selectScreen = (index: number) => {
    setActiveScreen(index);
  };
  const value = {
    activeScreen,
    setActiveScreen,
    selectScreen,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
const useStore = () => useContext(StoreContext);
export { Store, useStore };
