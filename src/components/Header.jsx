import { useContext } from "react";
import logo from "../assets/OLX-logo.png";
import { CiSearch } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="p-4 fixed w-full flex items-center justify-between bg-gray-100 gap-2">
        <img onClick={handleClick} src={logo} alt="olx-logo" className="h-7" />

        <div className="hidden border-2 border-solid border-black sm:flex items-center bg-white px-2 py-3 rounded gap-2">
          <CiSearch size={25} />
          <input type="text" placeholder="India" />
          <FaChevronDown />
        </div>

        <div className="hidden h-12 w-full border-2 border-black md:flex items-center bg-white  rounded">
          <input
            className="h-full w-full outline-none"
            placeholder=" Find Cars, Mobile Phones and more..."
          />
          <div className="h-full w-12 bg-gray-800 flex justify-center items-center">
            <CiSearch className="text-2xl text-white" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>English</p>
          <FaChevronDown size={20} />
        </div>
        {user ? (
          <>
            <p>{user.displayName}</p>
            <button onClick={logOut} className="underline font-semibold">
              Logout
            </button>
          </>
        ) : (
          <Link className="underline font-semibold" to="/login">
            Login
          </Link>
        )}
        <div onClick={()=>navigate("/sell")} className="h-10 w-32 sell flex justify-center items-center rounded-3xl">
          <div className=" cursor-pointer h-[82%] w-[86%] bg-white  rounded-3xl flex items-center justify-center gap-1">
            <TiPlus />
            <span className="font-bold">SELL</span>
          </div>
        </div>
      </div>
      <div className="pt-20 hidden md:block">
        <div className="flex justify-center gap-3 items-center py-2 border-t-2 border-b-2 text-sm">
          <span className="text-black hover:text-blue-700">Cars</span>
          <span className="text-black hover:text-blue-700">Motorcycles</span>
          <span className="text-black hover:text-blue-700">MobilePhones</span>
          <span className="text-black hover:text-blue-700">
            For Sale: House & Apartments
          </span>
          <span className="text-black hover:text-blue-700">Scooters</span>
          <span className="text-black hover:text-blue-700">
            Commercial & Other Vehicles
          </span>
          <span className="text-black hover:text-blue-700">
            For Sale: House & Apartments
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
