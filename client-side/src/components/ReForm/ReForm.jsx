import React from "react";

function ReForm() {
  return (
    <div className="w-screen h-screen flex justify-center bg-[#FFF6DB]">
      <div className="w-5/12 h-5/6 ">
        <div>
          <h1> Join now and get AED50</h1>
        </div>
        <form>
          <div>
            <input type="text" placeholder="Full Name" className="w-3/4 h-10" />
          </div>
          <div>
            <input type="email" placeholder="Email" className="w-3/4 h-10" />
          </div>
          <div>
            <input
              type="number"
              placeholder="Contact no."
              className="w-3/4 h-10"
            />
          </div>
          <div>
            <input type="text" placeholder="message" className="w-3/4 h-20" />
          </div>
          <button className="rounded h-[53px] w-[258px] bg-[#313131]">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReForm;
