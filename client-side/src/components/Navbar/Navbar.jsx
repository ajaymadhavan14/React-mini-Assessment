import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation()
  console.log(location,"locat");
  return (
    <div className={` w-screen ${location.pathname === "/"  ? "bg-[#FFFFFF]" : "bg-[#FFF6DB]"}  py-4 px-16`}>
      <div className="">
        <img src="/image 21.png" alt="image" className="w-[171px] h-[56px]" />
      </div>
    </div>
  );
}

export default Navbar;
