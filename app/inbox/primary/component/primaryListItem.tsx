"use client";
import React, { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { PiTagChevron } from "react-icons/pi";
import IconButton from "@/components/iconButton";
import { Checkbox } from "@/components/ui/checkbox";
import { RiInboxArchiveLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEnvelopeOpen } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

const PrimaryListItem = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border-b hover:shadow-lg hover:cursor-pointer flex items-center justify-between px-2 border-opacity-50 border-b-gray-400 w-full"
    >
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
      {hovered ? (
        <div className="flex gap-2 items-center">
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<RiInboxArchiveLine className="w-5 h-5 text-gray-800" />}
          />
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<FaRegTrashAlt className="w-5 h-4 text-gray-800" />}
          />
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<FaRegEnvelopeOpen className="w-5 h-4 text-gray-800" />}
          />
          <IconButton
            className="hover:bg-gray-400 hover:bg-opacity-40 p-2"
            icon={<AiOutlineClockCircle className="w-5 h-5 text-gray-800" />}
          />
        </div>
      ) : (
        <p className="text-xs text-black font-semibold pr-2">2:54 PM</p>
      )}
    </div>
  );
};

export default PrimaryListItem;
