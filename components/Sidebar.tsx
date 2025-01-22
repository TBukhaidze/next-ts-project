"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const [isActive, setIsActive] = useState(path);
  const [prevPath, setPrevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  useEffect(() => {
    setIsActive(path);
  }, [path]);

  return (
    <div className="fixed right-8 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      <AnimatePresence mode="wait">
        {isRouting && <Transition />}
        <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setIsActive(link.link)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${
                  isActive === link.link ? "text-orange-500" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
