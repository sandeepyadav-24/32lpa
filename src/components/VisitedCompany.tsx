import React from "react";
import JobCard from "./JobCard";

const VisitedCompany = () => {
  const color = ["FFE1CC", "D4F6EC", "E3DAFA", "DFF2FE", "FBE2F4", "ECEFF4"];
  const randomNumber = () => {
    return Math.floor(Math.random() * 6);
  };

  return (
    <div className=" px-20 bg-[#F9F9F9] ">
      <div className="flex flex-ro font-boldw">
        <h1 className=" py-10 text-5xl ">All Visited Companies</h1>
        <span className="my-12 px-5 mx-5 text-3xl border-[1px] border-[#BBBBBB] rounded-3xl ">
          5
        </span>
      </div>

      <div className="flex flex-wrap mx-40">
        <JobCard
          companyName="Afford Medical"
          date="20 May, 2024"
          color={color[randomNumber()]}
        />
        <JobCard
          companyName="Josh Technology"
          date="5 June, 2024"
          color="D4F6EC"
        />
        <JobCard
          companyName="Mediology"
          date="9 July, 2024"
          color={color[randomNumber()]}
        />
        <JobCard companyName="MoonDrive" date="12 July, 2024" color="DFF2FE" />
        <JobCard companyName="Lutron" date="25 July, 2024" color="ECEFF4" />
      </div>
    </div>
  );
};

export default VisitedCompany;
