import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex flex-col md:flex-row gap-5 md:justify-between md:px-60 p-5">
      <h1 className="text-white text-[35px] sm:text-[45px]">
        Temuri <span className="font-thin">Bukhaidze</span>
        <span className="text-red-500">.</span>
      </h1>
      <div className="flex flex-row items-center justify-center gap-5">
        {Socials.map((social) => (
          <Image
            key={social.name}
            src={social.src}
            alt={social.name}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
