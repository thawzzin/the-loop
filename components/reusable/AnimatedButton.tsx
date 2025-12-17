import { ReactNode } from "react";
import style from "./style.module.css";

const AnimatedButton = ({ children }: { children: ReactNode }) => {
  return (
    <button
      className={`${style.btn} relative bg-primary text-white font-sans uppercase font-medium mx-auto block px-8 py-3 cursor-pointer overflow-hidden`}
    >
      <span className="block text-sm md:text-base">{children}</span>
      <span className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[200%] w-full text-sm md:text-base">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
