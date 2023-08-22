import React, { useState } from "react";
import axios from "../../axios/axios";
import Trophy from '../../assets/Trophy.png'
function ReForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    // Validate full name (not empty)
    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full Name is required";
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    // Validate phone number (at least 10 digits)
    const phoneNumberPattern = /^\d{10,}$/;
    if (!phoneNumberPattern.test(formData.phoneNumber)) {
      validationErrors.phoneNumber = "Invalid phone number";
    }

    // Validate message (not empty)
    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    // Update errors state and handle submission if no errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form data:", formData);
      axios.post("/registrationdata", formData);
      // Perform further actions like sending the data to a server
    }
  };
  return (
    <div className="w-screen  flex justify-center items-center bg-[#FFF6DB]">
      <div className=" h-5/6 ">
        <div className="w-[525px] flex my-10">
          <img src={Trophy} className="h-[66px] w-[66px]" alt="" />
          <p className="text-[#23827A] text-[37px] font-medium"> Join now and get AED50</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              placeholder="Full Name"
              className=" w-full px-3 py-3 text-black border border-black rounded-lg"
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className="text-red-500">{errors.fullName}</div>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className=" w-full px-3 py-3 text-black border border-black rounded-lg"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-red-500">{errors.email}</div>}
          </div>
          <div>
            <input
              type="number"
              placeholder="Contact no."
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className=" w-full px-3 py-3 text-black border border-black rounded-lg"
            />
            {errors.phoneNumber && (
              <div className="text-red-500">{errors.phoneNumber}</div>
            )}
          </div>
          <div>
            <textarea  value={formData.message}
              onChange={handleChange}  placeholder="message"   id="message"
              name="message"  className=" w-full px-3 py-3 min-h-[175px] text-black border border-black rounded-lg" name="" id="" cols="30" rows="10"/>
            {/* <input
              type=""
             
              className="w-3/4 h-20"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            /> */}
            {errors.message && (
              <div className="text-red-500">{errors.message}</div>
            )}
          </div>
          <div className="flex justify-end">

          <button
            className="rounded h-[53px] w-[258px]  subButton"
            type="submit"
          >
            Submit
          </button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default ReForm;
