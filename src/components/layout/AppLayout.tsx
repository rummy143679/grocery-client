import { Outlet } from "react-router-dom";
import { useState } from "react";
import type { FilterState } from "../../types/Filter";
import BottomNav from "../common/BottomNav";
import DesktopHeader from "../common/DesktopHeader";
import FilterDrawer from "../common/FilterDrawer";

const AppLayout = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    maxPrice: 1000,
    rating: 0,
  });
  return (
    <>
      {/* Desktop Header */}
      <DesktopHeader />

      <main>
        {/* <Outlet  /> */}
        <Outlet context={{ filters, setFilters }} />

        {/* Filter Drawer (mobile only usage controlled inside component) */}
        <FilterDrawer
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          setFilters={setFilters}
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
