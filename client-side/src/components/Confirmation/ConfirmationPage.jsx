import React from "react";
import { useNavigate } from "react-router-dom";
import box from "../../assets/giftBox.png";
function ConfirmationPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/alldata");
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#FFF6DB]">
    <div className="w-full md:w-[636px] h-[555px] bg-[#FEFEFE] flex flex-col items-center">
      <div className="w-[242px] h-[225px]">
        <img src={box} alt="" />
      </div>
      <div className="space-y-4 md:space-y-8 flex justify-center flex-col items-center">
        <div className="font-urbanist text-lg md:text-2xl font-bold text-[#FFA400]">
          <p>CONGRATULATIONS!</p>
        </div>
        <div className="font-urbanist text-base md:text-lg font-medium">
          <p>You have been added to the waiting list</p>
        </div>
        <div className="">
          <button
            className="w-48 md:w-64 h-12 md:h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-500 text-white font-bold"
            onClick={handleNavigate}
          >
            <span className="font-Urbanist text-base md:text-xl font-medium">Done</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default ConfirmationPage;
