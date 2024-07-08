import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-20 py-5">
      <div className="text-[#2F4AE3] text-4xl font-bold">Codefox</div>
      <div>
        <ul className="flex flex-row  text-[#616B6F] text-lg ">
          <li className="mx-5">Upcoming Visits</li>
          <li className="mx-5">Past Visits</li>
          <li className="mx-5">Leaderboard</li>
          <li className="mx-5">About Us</li>
        </ul>
      </div>
      <div className="flex flex-row">
        <div className="mx-3 text-xl font-semibold ">Join Codefox</div>

        <div className="text-[#3670FF] text-xl font-semibold mx-3">
          Sign in{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
