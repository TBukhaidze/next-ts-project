import ServiceSlider from "@/components/ServiceSlider";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0C011A] min-h-screen overflow-hidden px-4 md:px-0">
      <div className="flex flex-col gap-3 md:gap-6 text-center md:text-left md:pl-20 lg:pl-40 pb-10 md:pb-0 items-center justify-center mt-10">
        <h1 className="text-4xl lg:text-5xl text-white font-semibold">
          My Skills<span className="text-red-500">.</span>
        </h1>
        <p className="max-w-xs md:max-w-sm text-base md:text-lg text-gray-200 md:text-gray-400 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="relative md:absolute md:-left-36 md:bottom-5 rotate-12 animate-pulse duration-75">
        <Image
          src="/assets/bulb.png"
          alt="bulb"
          width={260}
          height={260}
          className="w-20 h-20 md:w-full md:h-full hidden md:block"
        />
      </div>
      <ServiceSlider />
    </div>
  );
};

export default Page;
