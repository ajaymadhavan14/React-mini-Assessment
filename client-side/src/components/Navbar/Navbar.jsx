import React from "react";
import { useLocation } from "react-router-dom";
import image from '@assets/imageLogo.png'
import { Link } from "react-router-dom";


function Navbar() {
  const location = useLocation();
  return (
    <div
      className={` w-screen ${
        location.pathname === "/" ? "bg-[#FFFFFF]" : "bg-primary"
      }  py-4 px-16`}
    >
      <div>
        <Link to={'/'}>
        <img src={image} alt="image" className="w-[171px] h-[56px]" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
