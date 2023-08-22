import React from "react";
import { Link } from "react-router-dom";
import Frame from "../../assets/Frame.png";
import Frame1 from "../../assets/Frame 1114.png";
import Frame2 from "../../assets/Frame 1115.png";
import Frame3 from "../../assets/Frame 1116.png";
import Frame4 from "../../assets/Frame 1117.png";
import Frame5 from "../../assets/Frame 1118.png";

function LandingPage() {
  return (
    <div className="w-screen bg-gradient-to-b from-[#FFF6DB] to-[#FFFFFF] ">
    

      <div className=" bg- h-[614px] w-screen flex  ">
        <div className="h-full w-1/2  flex  flex-col justify-center pl-28">
          <h3 className="text-[38px] font-bold leading-snug">
            The say, when life gives you <br /> lemons, make lemonade!
          </h3>
          <p className="text-[24px] font-medium mt-5">
            But your lemonade might tasted different from others <br />{" "}
            considering how well you play with the intgredients.
            <p className="mt-11 font-bold">
              Let's see how your lemonade tastes!
            </p>
          </p>

          <div className="mt-10">
            <Link to="/registrationform">
            <button className="rounded flex justify-center  items-center bg-gradient-to-r text-[27px] px-10 py-2 text-white from-[#E75553] to-[#ED8663]">
              <span>Join now</span>
              <i
                className="fa-solid fa-arrow-right ml-3 mt-2"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
            </Link>
          </div>
        </div>
        <div className="h-full w-1/2 flex justify-left  items-center pt-28">
          <img className="h-[557px] w-[557px]" src={Frame} alt="image" />
        </div>
      </div>
      

      {/*  */}
      <div className="h-[557px] w-screen">
        <div className="flex justify-center text-[38px]  font-semibold">
          <h2 className="text-center">
            Take the test & know which of the <br /> lemon personalities you
            resonate with{" "}
          </h2>
        </div>
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-5 px-20 gap-5">
            <div className="">
              <img className="" src={Frame1} alt="image" />
            </div>
            <div className="">
              <img className="" src={Frame2} alt="image" />
            </div>
            <div className="">
              <img className="" src={Frame3} alt="image" />
            </div>
            <div className="">
              <img className="" src={Frame4} alt="image" />
            </div>
            <div className="">
              <img className="" src={Frame5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
