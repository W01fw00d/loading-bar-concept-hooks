import * as React from "react";

export const StoreContext = React.createContext({});

export const StoreProvider = ({ children }) => {
  console.log("Render Store Context Provider");
  const initialState = false;

  const isLoadingReducer = (state, action) => {
    switch (action) {
      case "on":
        return true;
      case "off":
        return false;
      default:
        throw new Error();
    }
  };

  const [loadingState, loadingDispatch] = React.useReducer(
    isLoadingReducer,
    initialState
  );

  const store = { loadingState, loadingDispatch };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
