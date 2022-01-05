import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

interface ILayoutContext {
  drawerWidth: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
  setDrawerOpen: (boolean) => void;
}

// Put "undefined" as default value since this context will never be used out of its provider's scope.
// @ts-ignore
const LayoutContext = createContext<ILayoutContext>(undefined);

const drawerCloseWidth = 80;
const drawerOpenWidth = 300;

export function LayoutContextProvider({ children }: { children: ReactNode }): JSX.Element {
  const [drawerWidth, setDrawerWidth] = useState<number>(drawerOpenWidth);
  // const [isDrawerOpen, setDrawerOpen] = useState<boolean>(true);
  const isDrawerOpen = useMemo(() => drawerWidth > drawerCloseWidth, [drawerWidth]);
  const setDrawerOpen = useCallback((open) => {
    setDrawerWidth(open ? drawerOpenWidth : drawerCloseWidth);
  }, [setDrawerWidth]);
  const openDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, [setDrawerOpen]);
  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, [setDrawerOpen]);
  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!isDrawerOpen);
  }, [isDrawerOpen, setDrawerOpen]);
  return (
    <LayoutContext.Provider value={{
      drawerWidth,
      isDrawerOpen,
      openDrawer,
      closeDrawer,
      toggleDrawer,
      setDrawerOpen,
    }}>{children}</LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}