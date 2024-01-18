import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const [filters, SetFilters] = useState([]);
  return (
    <AppContext.Provider value={{ filters, SetFilters }}>
      {children}
    </AppContext.Provider>
  );
}
export const useGlobal = () => {
  return useContext(AppContext);
};

export default AppProvider;
