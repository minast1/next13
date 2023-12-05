import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends React.ComponentPropsWithoutRef<"button"> {
  icon: React.ReactNode;
  className?: string;
}
const IconButton = ({ icon, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        "text-white border border-transparent hover:bg-gray-400 hover:bg-opacity-10 hover:text-white focus:ring-1 focus:outline-none focus:ring-gray-50 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center",
        className
      )}
    >
      {icon}
      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default IconButton;
