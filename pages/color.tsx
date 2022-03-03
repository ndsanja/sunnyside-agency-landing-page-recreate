import React from "react";
import { HiArchive } from "react-icons/hi";
const Color = () => {
  return (
    <div>
      Color
      <div>Primary Color</div>
      <div className="flex space-x-2">
        <div className=" px-4 py-2 bg-primary-soft-red">soft red</div>
        <div className=" px-4 py-2 bg-primary-yellow">yellow</div>
        <div className=" px-4 py-2 bg-primary-dark-desaturated-cyan">
          dark saturated cyan
        </div>
        <div className=" px-4 py-2 bg-primary-dark-blue">dark blue</div>
        <div className=" px-4 py-2 bg-primary-dark-moderate-cyan">
          dark moderate cyan
        </div>
      </div>
      <div>neutral Color</div>
      <div className="flex space-x-2">
        <div className=" px-4 py-2 bg-neutral-very-dark-desaturated-blue">
          very dark desaturated blue
        </div>
        <div className=" px-4 py-2 bg-neutral-very-dark-grayish-blue">
          very dark grayish blue
        </div>
        <div className=" px-4 py-2 bg-neutral-dark-grayish-blue">
          dark grayish blue
        </div>
        <div className=" px-4 py-2 bg-neutral-grayish-blue">grayish blue</div>
        <div className=" px-4 py-2 bg-neutral-white">white</div>
      </div>
      <div>
        <h1 className="text-2xl font-barlow font-semibold">
          Ini adalalh font barlow
        </h1>
        <h1 className="text-2xl font-fraunces font-bold">
          Ini adalalh font fauncess
        </h1>
        <h1 className="text-2xl font-fraunces font-black">
          Ini adalalh font fauncess
        </h1>
        <HiArchive className="h-4 w-4 text-primary-dark-blue" />
      </div>
    </div>
  );
};

export default Color;
