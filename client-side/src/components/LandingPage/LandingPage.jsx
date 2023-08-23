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
      <div className="  lg:h-[614px] w-screen flex flex-col md:flex-row  ">
        <div className="h-full md:w-1/2  flex  flex-col justify-center mt-6 md:pl-28 sm:pl-10">
          <h3 className=" md:text-[38px] font-bold leading-snug">
            The say, when life gives you <br /> lemons, make lemonade!
          </h3>
          <p className="md:text-[24px] font-medium md:mt-5 sm:mt-2">
            But your lemonade might tasted different from others <br />{" "}
            considering how well you play with the intgredients.
            <p className="md:mt-11 font-bold">
              Let's see how your lemonade tastes!
            </p>
          </p>

          <div className="md:mt-10  ml-10 mt-6 sm:ml-10">
            <Link to="/registrationform">
              <button className="rounded flex justify-center  items-center bg-gradient-to-r md:text-[27px] px-10 py-2 text-white from-[#E75553] to-[#ED8663]">
                <span>Join now</span>
                <i
                  className="fa-solid fa-arrow-right ml-3 mt-2"
                  style={{ color: "#ffffff" }}
                ></i>
              </button>
            </Link>
          </div>
        </div>
        <div className="h-full sm:w-1/2 flex justify-left md:justify-center  items-center md:pt-20  lg:pt-28">
          <img className="min-h-[300px] min-w-[300px] lg:h-[557px] w-[557px]" src={Frame} alt="image" />
        </div>
      </div>

      <div className=" lg:h-[557px] w-screen">
        <div className="flex justify-center md:text-[38px]  font-semibold">
          <h2 className="text-center">
            Take the test & know which of the <br /> lemon personalities you
            resonate with
          </h2>
        </div>
        <div className="flex justify-center h-full items-center">
          <div className="grid  grid-col-1 sm:grid-cols-2 md:grid-cols-5 px-5 sm:px-20 gap-5">
            <div>
              <img src={Frame1} className="h-[320px] w-[249px]" alt="image" />
            </div>
            <div>
              <img className="h-[320px] w-[249px]" src={Frame2} alt="image" />
            </div>
            <div>
              <img className="h-[320px] w-[249px]" src={Frame3} alt="image" />
            </div>
            <div>
              <img className="h-[320px] w-[249px]" src={Frame4} alt="image" />
            </div>
            <div>
              <img className="h-[320px] w-[249px]" src={Frame5} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
