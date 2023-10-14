import React from "react";
import Slider from "./Slider";

const Dashboard = () => {
  return (
    <div>
      <Slider />
      <div
        className="container mt-5 p-4 shadow"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="grid grid-cols-2">
          <div className="p-4">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="mb-3">
              <label className="text-gray-600">Consulting Patient Name:</label>
              <p className="text-xl">Michael Alex</p>
            </div>
            <div className="mb-3">
              <label className="text-gray-600">Location:</label>
              <p className="text-xl">Dubai</p>
            </div>
            <div className="mb-3">
              <label className="text-gray-600">Next Visit Date:</label>
              <p className="text-xl">26-10-23</p>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="mb-3">
              <label className="text-gray-600">Email:</label>
              <p className="text-xl">michaelalex@example.com</p>
            </div>
            <div className="mb-3">
              <label className="text-gray-600">Phone:</label>
              <p className="text-xl">4951236758</p>
            </div>
            <div className="mb-3">
              <label className="text-gray-600">First Date of visit:</label>
              <p className="text-xl">08-10-23</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
