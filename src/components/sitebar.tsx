import { Link, useLocation } from "react-router-dom";
import logo from "../assets/tadi.webp";
import { className } from "../utils/className";
import { useAuthStore } from "../store/authStore";

const SiteBar = () => {
  const location = useLocation();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <div className="w-[15%] h-[100vh] fixed left-0 top-0 bg-white shadow-lg">
      <img className="p-[24px]" src={logo} alt="logo" />
      <ul className="mt-[24px] grid gap-2">
        <Link className="" to="/">
          <li
            className={className({
              "hover:bg-stroke px-[24px]  py-[10px] text-blue-primary rounded-[8px]":
                true,
              "bg-blue-primary text-white hover:bg-blue-primary hover:text-white":
                location.pathname === "/",
            })}
          >
            Dashboard
          </li>
        </Link>
        <Link className="" to="/turniket">
          <li
            className={className({
              "hover:bg-stroke px-[24px]  py-[10px] text-blue-primary rounded-[8px]":
                true,
              "bg-blue-primary text-white hover:bg-blue-primary hover:text-white":
                location.pathname === "/turniket",
            })}
          >
            Turniket
          </li>
        </Link>
        <li
          onClick={handleLogout}
          className={className({
            "hover:bg-stroke px-[24px]  py-[10px] text-blue-primary rounded-[8px] cursor-pointer":
              true,
          })}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default SiteBar;
