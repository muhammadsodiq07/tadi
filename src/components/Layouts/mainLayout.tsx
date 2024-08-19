import { Outlet } from "react-router-dom";
import SiteBar from "../sitebar";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <SiteBar />
      </div>
      <div className="px-[16px] w-[85%]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
