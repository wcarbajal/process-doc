"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useSideBarOpen } from '@/store/sideBarOpen';

interface Props{
  children: React.ReactNode;  // Children component to be rendered within the layout.  The children component can be any valid React component.  The layout will render the children component inside its main content area.  The sidebar and header components are also rendered inside the layout.  The layout will be responsive and adjust its layout based on the screen size.  The layout will also provide a toggle button for the sidebar to be visible or hidden.  The layout will also provide a navigation menu for the sidebar.  The layout will also provide a user dropdown menu for the header.  The layout will also provide a logout functionality for the user dropdown menu.  The layout will also provide a search functionality for the header.  The layout will also provide a notification functionality for the header.  The layout will also provide a notification count for the notification functionality.  The layout will also provide a customizable theme for the layout.  The layout will also provide a customizable logo for the layout
  
}
export default function DefaultLayout({children}: Props) {
  


  const sidebarOpen = useSideBarOpen( state => state.sidebarOpen );

  const setSidebarOpen = useSideBarOpen( state => state.setSidebarOpen );

  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col lg:ml-72.5">
          {/* <!-- ===== Header Start ===== --> */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> 
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="m-2 ">
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
