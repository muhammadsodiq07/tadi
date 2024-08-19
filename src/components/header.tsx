import { useAuthStore } from "../store/authStore";

const Header = () => {
  const { user } = useAuthStore();

  return (
    <div className="bg-white shadow-lg fixed w-[85%]">
      <div className="flex items-center justify-end px-[16px] py-[4px]">
        <h2 className="">
          {user?.firstName} {user?.lastName}
        </h2>
        <img
          className="w-[50px] h-[50px] object-cover rounded-[50%] ms-[8px]"
          src={`${user?.image}`}
          alt={`${user?.firstName}`}
        />
      </div>
    </div>
  );
};

export default Header;
