import React, { useState } from "react";
import InputImage from "../assets/Work-ezgif.com-gif-maker.gif";
import toast from "react-hot-toast";
import axios from "axios";

const InputForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    review: "",
  });

  // console.log(formData);

  function changeHandler(event) {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(event) {
    event.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/predict", formData);
      toast.success("Thanks for your responce");
      setFormData({
        email: "",
        review: "",
      });
    } catch (error) {
      console.log(error);
      toast.success(error);
    }
  }

  return (
    <div className="mb-10">
      <div className="w-[70%]  rounded-lg flex mx-auto flex-col shadow-xl">
        <h2 className="w-[50%] text-white font-inter text-3xl ml-2 mt-4">
          Reviews Section
          <br></br>
          <span className="text-blue-100 text-sm">
            Write your review here...
          </span>
        </h2>
        <img
          src={InputImage}
          alt="ReviewImage"
          width={300}
          className="mx-auto mt-5 rounded-lg"
        ></img>
        <form className="" onSubmit={submitHandler}>
          {/* Email */}
          <label className="w-[full]">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Email Address<sup className=" text-pink-200">*</sup>
            </p>
            <input
              className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-[50%] p-[12px]  border-b border-white"
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter email"
              value={formData.email}
            ></input>
          </label>

          <label className="w-[full]">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375rem] mt-3">
              Review<sup className=" text-pink-200">*</sup>
            </p>
            <textarea
              className="bg-richblack-800 rounded-[0.5rem] tetx-richblack-5 w-[100%] h-28 p-[12px]  border-b border-white"
              required
              type="text"
              name="review"
              onChange={changeHandler}
              placeholder="Enter your Review..."
              value={formData.review}
            ></textarea>
          </label>

          <button className="bg-yellow-50 rounded-[8px] font-medium text-center text-richblack-900 px-[12px] py-[8px] mt-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default InputForm;
