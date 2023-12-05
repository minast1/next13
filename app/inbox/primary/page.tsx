import IconButton from "@/components/iconButton";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { PiTagChevron } from "react-icons/pi";

const PrimaryInboxPage = () => {
  return (
    <div>
      <div className="border-b flex items-center justify-between px-2 border-opacity-50 border-b-gray-400 w-full">
        <div className="flex items-center">
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<Checkbox className="w-3.5 h-3.5" />}
          />
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<IoMdStarOutline className="w-6 h-5 text-gray-500" />}
          />
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<PiTagChevron className="w-6 h-5 text-gray-500" />}
          />
          <p className="text-sm text-black font-semibold">
            LinkedIn Job Alerts..
          </p>
        </div>
        <div className=" truncate flex-1 pl-[55px]">
          <p className="text-[13.5px] text-gray-500 font-medium truncate">
            The height at which great men reach today was not attained by sudden
            flight....
          </p>
        </div>

        <p className="text-xs text-black font-semibold pr-2">2:54 PM</p>
      </div>
    </div>
  );
};

export default PrimaryInboxPage;
