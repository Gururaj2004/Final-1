import React from "react";
import patientmeetingdoctor from "../assets/patientmeetingdoctor.webp";
import { Link } from "react-router-dom";

export default function Loginpage() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-green-300 sm:max-w-[900px]">
        <div className="w-full h-[550] hidden md:block mt-32 ml-3">
          <img className="w-400 h-400" src={patientmeetingdoctor} alt="/" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form className=" mt-7">
            <h2 className="text-4xl font-bold text-center mb-24 text-gray-600">
              @Home.com!
            </h2>
            <div>
              <input
                className="border p-2 mr-2 mb-4 w-80 ml-11"
                type="text"
                placeholder="Username"
                name="Username"
              />
            </div>
            <div>
              <input
                className="border p-2 mb-4 w-80 ml-11"
                type="Password"
                placeholder="Password"
                name="Password"
              />
            </div>
            <Link to="/home">
              <button className="w-80 ml-11 py-2 my-4 bg-green-600 hover:bg-yellow-500 mt-5">
                Login
              </button>
            </Link>
            <br />
            <div className="flex justify-center">
              <h6>or </h6>
              <a href="/" className="text-blue-500 underline ml-2">
                {" "}
                Forgot Password? 🤔
              </a>
            </div>

            <div className="flex justify-center">
              <h6 className="mr-2 mt-4">are you new here !</h6>
              <h6 className="text-blue-500 underline ml-1 mt-4">
                <Link to="/Signuppage">Sign-up🚀</Link>
              </h6>
            </div>
          </form>
          <div className=" flex justify-evenly">
            <a href="/">
              <img
                src="https://img.icons8.com/color/96/google-logo.png"
                alt="Google"
                className="h-8 w-8"
              />
            </a>
            <a href="/">
              <img
                src="https://img.icons8.com/fluency/48/facebook-new.png"
                alt="Facebook"
                className="h-8 w-8 ml-1"
              />
            </a>
            <a href="/">
              <img
                src="https://img.icons8.com/ios-filled/100/twitterx--v1.png"
                alt="Twitter"
                className="h-8 w-8 ml-1"
              />
            </a>
            <a href="/">
              <img
                src="https://img.icons8.com/color/96/gmail-new.png"
                alt="Gmail"
                className="h-8 w-8 ml-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
