import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PrimaryButton from "./Buttons/PrimaryButton";

const Header = () => {
  const location = useLocation();

  return (
    <nav className="bg-accent-white mx-2 sm:mx-auto sm:w-11/12 border-b flex justify-between items-center">
      <h1 className="font-bold text-primary-orange" >
        Orangle-league
      </h1>
      <div className="flex sm:w-1/2 justify-between text-accent-black">
        <NavLink
          to="/"
          className="hover:text-red-200"
          activeClassName="text-red-500"
          exact
        >
          Home
        </NavLink>

        <NavLink
          to="/services"
          className="hover:text-red-200"
          activeClassName="text-red-500"
        
        >
          Services
        </NavLink>

        <NavLink
          to="/technologies"
          className="hover:text-red-200"
          activeClassName="text-red-500"
        >
          Technologies
        </NavLink>

        <NavLink
          to="/industries"
          className="hover:text-red-200"
          activeClassName="text-red-500"
        >
          Industries
        </NavLink>

        <NavLink
          to="/case-studies"
          className="hover:text-red-200"
          activeClassName="text-red-500"
        >
          Case Studies
        </NavLink>

        <NavLink
          to="/about-us"
          className="hover:text-red-200"
          activeClassName="text-red-500"
        >
          About us
        </NavLink>
      </div>
      <div className="my-2">
        <PrimaryButton />
      </div>
    </nav>
  );
};

export default Header;
