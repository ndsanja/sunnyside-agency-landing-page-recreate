import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary-dark-moderate-cyan relative">
      <img
        className="w-full h-full object-cover object-center"
        src="/mobile/image-header.jpg"
        alt="header-banner-mobile"
      />
      <div className="absolute top-[30%] left-[50%] translate-x-[-50%]">
        <h1 className="uppercase text-4xl font-black tracking-[0.3em] font-fraunces  text-neutral-white text-center">
          We Are Creative
        </h1>
        <div className="absolute left-1/2 -translate-x-1/2 top-36">
          <svg
            className="animate-bounce"
            width="36"
            height="114"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="#FFF"
              strokeWidth="6"
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 3v100M3 95.484l15 15 15-15" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
