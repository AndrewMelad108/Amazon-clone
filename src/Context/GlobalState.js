import React, { createContext, useContext, useReducer } from "react";

import appReducer from "./appReducer.js";
import { initalState } from "./appReducer.js";
const GlobalContext = createContext();
function GlobalProvider(props) {
  const [state, dispatch] = useReducer(appReducer, initalState);
  return (
    <GlobalContext.Provider
      value={{
        basket: state.basket,
        user: state.user,
        dispatch: dispatch,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
export const useAuth = () => {
  return useContext(GlobalContext);
};
