import React from "react";
import { Link, useNavigate } from "react-router-dom";;

const Header = () => {

  const navigate = useNavigate();


  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <nav className="bg-[#282c34] px-4 text-white  text-2xl h-[70px] flex justify-between items-center">
      <h1 className=" font-bold text-[#00B386]" onClick={handleSubmit}>Orangle-league</h1>
      <div className="flex sm:w-1/2 justify-between ">
        <Link to="/" className="hover:text-red-200">
          Home
        </Link>

        <Link to="/services" className="hover:text-red-200">
          Services 
        </Link>
      </div>
    </nav>
  );
};

export default Header;
