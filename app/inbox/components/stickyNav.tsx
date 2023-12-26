"use client";
import React, { useEffect, useState } from "react";
import IconButton from "@/components/iconButton";
import { MdRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import useScrollStore from "@/stores/scrollStore";

const StickyNav = () => {
  const isScrolled = useScrollStore((state) => state.isScrolled);
  return (
    <CardHeader className={cn("flex flex-col", isScrolled && "shadow-md")}>
      <div className="flex w-full items-center justify-between z-50 px-3 top-0 sticky">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            value=""
            className="w-4 h-4 outline-4 border-gray-800 rounded-sm focus:ring-gray-800 text-white"
          />

          <IconButton
            className="hover:bg-gray-600 p-2"
            icon={<MdRefresh className="w-5 h-5 text-gray-800" />}
          />
          <IconButton
            className="hover:bg-gray-600 p-2"
            icon={<IoMdMore className="w-5 h-5 text-gray-800" />}
          />
        </div>

        <div className="flex items-center gap-2">
          <p className="text-gray-600 text-xs mr-2">1-50 of 11,282</p>
          <IconButton
            disabled
            className="hover:bg-gray-600 p-2"
            icon={<GrFormPrevious className="w-5 h-5 text-gray-500" />}
          />
          <IconButton
            className="hover:bg-gray-600 p-2"
            icon={<GrFormNext className="w-5 h-5 text-gray-500" />}
          />
        </div>
      </div>
    </CardHeader>
  );
};

export default StickyNav;
