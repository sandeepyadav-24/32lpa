import React from "react";

const JobCard = (props: any) => {
  return (
    <div className="border-[1px] border-[#CFCFCF] my-3 mx-3 rounded-2xl p-2">
      <div className={`coloredPart bg-[#${props.color}] rounded-2xl p-2 `}>
        <span className="date bg-white px-3 rounded-2xl py-1 ">
          {props.date}
        </span>
        <h3>{props.companyName}</h3>
        <div className="flex flex-row">
          <div>Frontend Developer</div>
          <img
            src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
            alt="amazon-logo"
            className="w-5 h-5"
          />
        </div>
        <div>
          <div>Full time</div>
        </div>
      </div>
      <div className="details"></div>
    </div>
  );
};

export default JobCard;
