import { Outlet } from "react-router-dom";
import { useState } from "react";

import BottomNav from "../common/BottomNav";
import DesktopHeader from "../common/DesktopHeader";
import FilterDrawer from "../common/FilterDrawer";

const AppLayout = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Header */}
      <DesktopHeader />

      <main>
        <Outlet />

        {/* Filter Drawer (mobile only usage controlled inside component) */}
        <FilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          desktop={false}
        />
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </>
  );
};

export default AppLayout;
