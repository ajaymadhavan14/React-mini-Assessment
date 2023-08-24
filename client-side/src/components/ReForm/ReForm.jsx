import React, { useState } from "react";
import axios from "../../axios/axios";
import Trophy from "@assets/Trophy.png";
import "./Form.css";
import { useNavigate } from "react-router-dom";

function ReForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const handleInputClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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
      setIsEditing(false);
    } else {
      setErrors({});

      const response = await axios.post("/registration", formData);
      console.log(response);
      if (response.data.success) {
        navigate("/success");
      } else {
        alert(response.data.message);
      }
      // Perform further actions like sending the data to a server
    }
  };

  return (
    <div className="w-screen flex justify-center items-center bg-primary">
      {/* <div className="h-auto w-full max-w-screen-md p-6"> */}
      <div className="h-auto w-[525px] p-6">
        <div className="w-full sm:w-[525px] flex flex-col items-center sm:flex-row sm:items-start mx-auto my-10">
          <img src={Trophy} className="h-[66px] w-[66px] sm:mr-3" alt="" />
          <p className="text-[#23827A] text-[18px] sm:text-[37px] font-medium mt-3 sm:mt-0">
            Join now and get AED50
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className={`${errors.fullName && !isEditing && "pb-5"}`}>
            <input
              placeholder="Full Name"
              className={`${
                errors.fullName && !isEditing
                  ? "border-red-500 text-red-500"
                  : "border-black text-black"
              } w-full px-3 py-3 border rounded-lg`}
              type="text"
              id="fullName"
              name="fullName"
              value={
                errors.fullName && !isEditing ? "Full Name" : formData.fullName
              }
              // disabled={errors.fullName ? true : false}
              onChange={handleChange}
              onClick={handleInputClick}
            />
            {errors.fullName && !isEditing && (
              <div className="flex justify-end -mt-10 pr-3">
                <span className="bg-[#FF8181] text-red-700  px-2 rounded-lg">
                  FullName is Invalid
                </span>
              </div>
            )}
          </div>
          <div className={`${errors.email && !isEditing && "pb-5"}`}>
            <input
              // Email Input
              placeholder="Email"
              className={`${
                errors.email && !isEditing
                  ? "border-red-500 text-red-500"
                  : "border-black text-black"
              } w-full px-3 py-3 border rounded-lg`}
              type="email"
              id="email"
              name="email"
              value={errors.email && !isEditing ? "Email" : formData.email}
              // disabled={errors.email ? true : false}
              onChange={handleChange}
              onClick={handleInputClick}
            />
            {errors.email && !isEditing && (
              <div className="flex justify-end -mt-10 pr-3">
                <span className="bg-[#FF8181] text-red-700 px-2 rounded-lg">
                  Email is Invalid
                </span>
              </div>
            )}
          </div>
          <div className={`${errors.phoneNumber && !isEditing && "pb-5"}`}>
            <input
              // Phone Number Input
              placeholder="Contact no."
              className={`${
                errors.phoneNumber && !isEditing
                  ? "border-red-500 text-red-500"
                  : "border-black text-black"
              } w-full px-3 py-3 border rounded-lg`}
              type={errors.phoneNumber && !isEditing ? "text" : "number"}
              id="phoneNumber"
              name="phoneNumber"
              value={
                errors.phoneNumber && !isEditing
                  ? "Contact No"
                  : formData.phoneNumber
              }
              // disabled={errors.phoneNumber ? true : false}
              onChange={handleChange}
              onClick={handleInputClick}
            />
            {errors.phoneNumber && !isEditing && (
              <div className="flex justify-end -mt-10 pr-3">
                <span className="bg-[#FF8181] text-red-700  px-2 rounded-lg">
                  Number is Invalid
                </span>
              </div>
            )}
          </div>
          <div className={`${errors.message && !isEditing && "pb-5"}`}>
            <textarea
              // Message Textarea
              value={
                errors.message && !isEditing ? "Message" : formData.message
              }
              // disabled={errors.message ? true : false}
              onChange={handleChange}
              onClick={handleInputClick}
              placeholder="Message"
              id="message"
              name="message"
              className={`${
                errors.message && !isEditing
                  ? "border-red-500 text-red-500"
                  : "border-black text-black"
              } w-full px-3 py-3 border rounded-lg`}
              cols="30"
              rows="10"
            />
            {errors.message && !isEditing && (
              <div className="flex justify-end -mt-12 pr-3">
                <span className="bg-[#FF8181] text-red-700 px-2 rounded-lg">
                  Message is Invalid
                </span>
              </div>
            )}
          </div>
          <div className="flex justify-center md:justify-end">
            <button
              className="sample rounded h-[53px] w-[70%] sm:w-[258px] text-white font-medium text-lg bg-[#313131] hover:scale-100"
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
