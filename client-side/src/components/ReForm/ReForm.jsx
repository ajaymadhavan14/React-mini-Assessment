import React, { useState } from "react";
import axios from "../../axios/axios";
import Trophy from '../../assets/Trophy.png'
import  './Form.css'
import { useNavigate } from "react-router-dom";
function ReForm() {

  const navigate = useNavigate()
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

  const handleSubmit = async(e) => {
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
 
   const response =  await axios.post("/registrationdata", formData);

       if(response.data.success) {
         navigate("/success")
       }else {
       alert(response.data.message)
       }
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
          <div className={`${errors.fullName && "pb-5" }`}>
            <input
              placeholder="Full Name"
              className={` ${errors.fullName ? "border-red-500 text-red-500" : "border-black text-black" } w-full px-3 py-3  border  rounded-lg`}
              type="text"
              id="fullName"
              name="fullName"
              value={errors.fullName ? "Full Name" : formData.fullName}
              disabled={errors.fullName ? true :false}

              onChange={handleChange}
            />
            {errors.fullName && (
             <div className="flex justify-end -mt-10 pr-3  ">
             <span className="bg-[#FF8181] text-red-700 p-1 px-2 rounded-lg">FullName is Invalid </span>
             </div>
            )}
          </div>
          <div className={`${errors.email && "pb-5" }`}>
            <input
              type="email"
              placeholder="Email"
              className={` ${errors.email ? "border-red-500 text-red-500" : "border-black text-black" } w-full px-3 py-3  border  rounded-lg`}
              id="email"
              disabled={errors.email ? true :false}
              name="email"

              value={errors.email? "Email" : formData.email}
              onChange={handleChange}
            />
            { errors.email && <div className="flex justify-end -mt-10 pr-3  ">
              <span className="bg-[#FF8181] text-red-700 p-1 px-2 rounded-lg">Email is Invalid </span>
              </div> }
            
            {/* {errors.email && <div className="text-red-500">{errors.email}</div>} */}
          </div>
          <div  className={`${errors.phoneNumber && "pb-5" }`}>
            <input
              type={`${errors.phoneNumber ? "text" : "number"}`}
              placeholder="Contact no."
              id="phoneNumber"
              name="phoneNumber"
              value={errors.phoneNumber? "Contact No" : formData.phoneNumber }
              onChange={handleChange}
              disabled={errors.phoneNumber ? true :false}
              className={` ${errors.phoneNumber ? "border-red-500 text-red-500" : "border-black text-black" } w-full px-3 py-3  border  rounded-lg`}
            />
            {errors.phoneNumber && (
              <div className="flex justify-end -mt-10 pr-3  ">
              <span className="bg-[#FF8181] text-red-700 p-1 px-2 rounded-lg">Number is Invalid </span>
              </div>
            )}
          </div>
          <div  className={`${errors.message && "pb-5" }`} >
            <textarea  value={errors.message ? "Message" : formData.message}
            disabled={errors.message ? true :false}
              onChange={handleChange}  placeholder="message"   id="message"
              name="message"  className={` ${errors.message ? "border-red-500 text-red-500" : "border-black text-black" } w-full px-3 py-3  border  rounded-lg`}  cols="30" rows="10"/>
            {/* <input
              type=""
             
              className="w-3/4 h-20"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            /> */}
            {errors.message && (
               <div className="flex justify-end -mt-12 pr-3  ">
               <span className="bg-[#FF8181] p-1 text-red-700 px-2 rounded-lg">Messsage is Invalid </span>
               </div>
            )}
          </div>
          <div className="flex justify-end">

          <button
            className="sample rounded  h-[53px] w-[258px]  text-white font-medium text-lg bg-[#313131] hover:scale-100"
            
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
