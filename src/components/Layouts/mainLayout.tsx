import Header from "../header";
import SiteBar from "../sitebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      <div className="w-[15%]">
        <SiteBar />
      </div>
      <div className="w-[85%]">
        <Header />
        <div className="px-[16px] w-full mt-[58px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
