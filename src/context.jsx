import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
