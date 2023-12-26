import React from "react";
import IconButton from "@/components/iconButton";
import { MdRefresh } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { MdInbox } from "react-icons/md";
import Link from "next/link";
import { BsTag } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const InboxRouteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Tabs Header here  */}

      <div className="text-[15px] font-medium text-center w-full text-gray-800 border-b border-opacity-50 border-gray-400 ">
        <ul className="flex flex-wrap -mb-px">
          <Link
            href="/inbox/primary"
            className="border-b-[3px] mr-2 py-2 border-blue-700 flex items-center justify- w-64 hover:rounded-tl-none hover:bg-gray-500 hover:bg-opacity-10"
          >
            <li className="flex items-center gap-3 pl-4">
              <MdInbox className="w-5 h-5" />
              <p>Primary</p>
            </li>
          </Link>

          <Link
            href="/inbox/social"
            className="flex items-center mr-2 py-2 justify-start px-6 w-64 hover:bg-gray-500 hover:bg-opacity-10"
          >
            <li className="flex items-center gap-3">
              <BsTag className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <div className="flex gap-2 items-center">
                  <p
                  //className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  >
                    Promotions
                  </p>
                  <span className="inline-flex items-center justify-center text-center bg-green-600 w-14 text-white text-xs h-4 font-medium px-1 rounded-xl">
                    30 new
                  </span>
                </div>

                <p className="text-xs text-gray-500">
                  Critical Bench, Coach Wasty,{" "}
                </p>
              </div>
            </li>
          </Link>

          <Link
            href="/inbox/social"
            className="flex items-center mr-2 py-2 justify-start px-6 w-64 hover:bg-gray-500 hover:bg-opacity-10"
          >
            <li className="flex items-center gap-3">
              <LuUsers className="w-5 h-5" />
              <div className="flex flex-col items-start">
                <div className="flex gap-2 items-center">
                  <p
                  //className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                  >
                    Social
                  </p>
                  <span className="inline-flex items-center justify-center text-center bg-blue-600 w-14 text-white text-xs h-4 font-medium px-1 rounded-xl">
                    50 new
                  </span>
                </div>

                <p className="text-xs text-gray-500">Facebook, LinkedIn,</p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
      {children}
    </div>
  );
};

export default InboxRouteLayout;
