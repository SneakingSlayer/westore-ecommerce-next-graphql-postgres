import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

type LayoutProps = {
  children: React.ReactNode;
};

interface GlobalContextType {
  show: boolean;
  setToast?: () => void;
}

const initalState = {
  show: false,
};

export const GlobalContext = createContext<GlobalContextType | null>(null);

export const GlobalProvider = ({ children }: LayoutProps) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);

  // Actions
  const setToast = () => {
    console.log("yawa");
    dispatch({
      type: "SHOW_TOAST",
    });

    setTimeout(() => {
      dispatch({
        type: "HIDE_TOAST",
      });
    }, 3000);
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
