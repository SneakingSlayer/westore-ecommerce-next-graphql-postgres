import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

type LayoutProps = {
  children: React.ReactNode;
};

interface GlobalContextType {
  show: boolean;
  setToast: () => void;
}

const initalState = {
  show: false,
  setToast: () => {},
};

export const GlobalContext = createContext<GlobalContextType>(initalState);

export const GlobalProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Actions
  const setToast = async () => {
    await dispatch({
      type: "SHOW_TOAST",
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_TOAST",
      });
    }, 1000);
    return console.log("yawa");
  };

  return (
    <GlobalContext.Provider
      value={{
        show: state.show,
        setToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
