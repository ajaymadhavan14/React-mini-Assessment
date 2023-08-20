import React from "react";
import { useNavigate } from "react-router-dom";

function ConfirmationPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-[#FFF6DB]">
      <div className="w-[636px] h-[555px] bg-white flex flex-col items-center">
        <div className="w-[242px] h-[225px] bg-blue-500">hello</div>
        <div className="font-urbanist text-4xl font-[700] text-[#FFA400] w-[389px] h-[48px]">
          <p>CONGRATULATIONS!</p>
        </div>
        <div className="font-urbanist text-2xl font-[500] w-[537px] h-[36px]">
          <p>You have been added on the waiting list </p>
        </div>
        <div>
          <button
            className=" w-64 h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-500 text-white font-bold"
            onClick={handleNavigate}
          >
            <span className="font-Urbanist text-xl font-medium">Done</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
