import { ReactNode } from "react";
import style from "./style.module.css";

const AnimatedButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`${style.btn} ${className} relative bg-primary text-white font-sans uppercase font-medium block px-8 py-3 cursor-pointer overflow-hidden`}
    >
      <span className="block text-sm md:text-base">{children}</span>
      <span className="absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-[200%] w-full text-sm md:text-base">
        {children}
      </span>
    </button>
  );
};

export default AnimatedButton;
