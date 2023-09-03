import React, { useState } from "react";
import { FormattedResult } from "../types/SearchResponce";

type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  searchResponse: FormattedResult[];
  setSearchResponse: React.Dispatch<React.SetStateAction<FormattedResult[]>>;
  resultLoader: boolean;
  setResultLoader: React.Dispatch<React.SetStateAction<boolean>>;
  resultsError: boolean;
  setResultsError: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextInterface>({
  searchResponse: [],
  setSearchResponse: () => {},
  resultLoader: false,
  setResultLoader: () => {},
  resultsError: false,
  setResultsError: () => {},
});

export const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [searchResponse, setSearchResponse] = useState<FormattedResult[]>([]);
  const [resultLoader, setResultLoader] = useState(false);
  const [resultsError, setResultsError] = useState(false);

  const contextValue = {
    searchResponse,
    setSearchResponse,
    resultLoader,
    setResultLoader,
    resultsError,
    setResultsError,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
