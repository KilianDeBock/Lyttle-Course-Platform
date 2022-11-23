import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

export type Path = [string, string][];

export interface AppContextInterface {
  title: string;
  setTitle: (title: string) => void;
}

export interface AppContextProps {
  children: React.ReactNode;
}

export interface NavigationInfo {
  path: Path;
  text: string;
}

export type AppContextType = AppContextInterface | null;

export const AppContext = createContext<AppContextType>(null);
export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: AppContextProps) => {
  // I'm not using a useState since it does not matter if the title is updated
  // and the component is not re-rendered
  let title = 'Home';

  const setTitle = (newTitle: string) => {
    if (newTitle) {
      title = newTitle;
      document.title = `${newTitle} - Free3Dm`;
    }
  };

  return (
    <AppContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
        <CookiesProvider>
          <Router>
            <Routes>{children}</Routes>
          </Router>
        </CookiesProvider>
    </AppContext.Provider>
  );
};
