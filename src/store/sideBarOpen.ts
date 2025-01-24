


import { create } from 'zustand';


interface State {
  sidebarOpen: boolean;
  setSidebarOpen: ( newState: boolean) => void;

}



export const useSideBarOpen = create<State>()(
  ( set, get ) => ( {
    sidebarOpen: false,
    setSidebarOpen: ( newState ) => set( { sidebarOpen: newState } ),
  } )

);

