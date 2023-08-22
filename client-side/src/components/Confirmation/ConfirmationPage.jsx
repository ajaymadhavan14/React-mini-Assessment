import React from "react";
import { useNavigate } from "react-router-dom";
import box from "../../assets/giftBox.png";
function ConfirmationPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className="h-screen w-screen flex justify-center bg-[#FFF6DB]">
      <div className="w-[636px] h-[555px] bg-[#FEFEFE] flex flex-col items-center">
        <div className="w-[242px] h-[225px]">
          <img src={box} alt="" />
        </div>
        <div className="space-y-8  flex justify-center flex-col items-center">
          <div className="font-urbanist text-[40px] font-bold text-[#FFA400]  ">
            <p>CONGRATULATIONS!</p>
          </div>
          <div className="font-urbanist  text-[30px] font-medium  ">
            <p>You have been added on the waiting list </p>
          </div>
          <div className="">
            <button
              className=" w-64 h-16 rounded-lg bg-gradient-to-r from-red-500 to-red-500 text-white font-bold"
              onClick={handleNavigate}
            >
              <span className="font-Urbanist text-xl font-medium">Done</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPage;
