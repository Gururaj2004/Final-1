import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div className="bg-black text-white p-3">
      {/* Home Link */}
      <Link
        to="/home"
        className="nav-link bg-white mb-3 text-black rounded-full py-2 px-4 block"
      >
        Home
      </Link>
      <hr className="bg-white my-2" />
      {/* Other Links */}
      <ul className="nav flex-col">
        <li className="nav-item">
          <Link to="/userProfile" className="nav-link text-white">
            User Profile
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/Datauploader" className="nav-link text-white">
            Upload
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link text-white">
            Dashboard
          </Link>
        </li>
        <li className="nav-item mt-2">
          <Link to="/map" className="nav-link text-white">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Slider;
