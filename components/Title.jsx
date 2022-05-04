import React from "react";

export const Title = ({title,desc}) => {
    return (
        <div className="flex flex-col justify-center items-center  px-3  ">
          <h1 className="title-text font-bold text-2xl lg:text-4xl md:text-3xl sm:text-2xl ">{title}</h1>
          <img className="my-2" src="/assets/images/line.png"/>
          <span className="desc-text font-medium text-sm mt-2 w-full lg:w-2/3 lg:text-base  md:w-5/6 md:text-base  sm:w-full sm:text-base ">{desc}</span>
        </div>
    );

}