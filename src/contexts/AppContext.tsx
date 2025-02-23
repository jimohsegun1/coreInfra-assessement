import { useState, createContext, useEffect } from "react";
export interface AppContextValues {
  isNavBarOpen: boolean;
  setIsNavBarOpen: (isNavBarOpen: boolean) => void;
}
import { useLocation } from "react-router";

export const AppContext = createContext<AppContextValues | null>(null);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ isNavBarOpen, setIsNavBarOpen }}>
      {children}
    </AppContext.Provider>
  );
}
