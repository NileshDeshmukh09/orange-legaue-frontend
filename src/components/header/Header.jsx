import React from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";

const navLinkClasses = "font-almarai font-normal nav-link";
const activeNavLinkClasses = "text-primary-yellow font-almarai font-bold";

const Header = () => {
  return (
    <nav className="bg-accent-white mx-2 sm:mx-auto sm:w-11/12 border-b flex justify-between items-center">
      <h1 className="font-bold text-primary-orange">Orange-league</h1>
      <div className="flex sm:w-1/2 justify-between text-accent-black">
        <NavLink to="/" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          Home
        </NavLink>
        <NavLink to="/services" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          Services
        </NavLink>
        <NavLink to="/technologies" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          Technologies
        </NavLink>
        <NavLink to="/industries" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          Industries
        </NavLink>
        <NavLink to="/case-studies" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          Case Studies
        </NavLink>
        <NavLink to="/about-us" className={({ isActive }) => (isActive ? activeNavLinkClasses : navLinkClasses)}>
          About Us
        </NavLink>
      </div>
      <div className="my-2">
        <PrimaryButton />
      </div>
    </nav>
  );
};

export default Header;
