import React from "react";
import { Button } from "./ui/button";
import { sideData } from "@/lib/sidebarData";

const Sidebar = () => {
  return (
    <aside
      className="fixed top-20 left-0 z-40 w-64 h-screen"
      aria-label="Sidebar"
    >
      <div className="h-full  py-4 overflow-y-auto bg-transparent">
        <Button className="text-[#5f6368] ml-3 bg-white rounded-2xl w-[145px] h-14 flex items-center justify-around hover:bg-white">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 21 21"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
            />
          </svg>
          <p className="text-base">Compose</p>
        </Button>
        <ul className=" space-y-1 font-medium text-white mt-5">
          {sideData.map((data, idx) => (
            <li
              key={idx}
              className="pl-8 hover:bg-gray-500 hover:bg-opacity-80 hover:rounded-r-full"
            >
              <a
                href="#"
                className="flex items-center p-2 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
              >
                {data.icon}
                <span className="ms-5 flex-1">{data.title}</span>
                {data.subtitle && (
                  <span className="inline-flex shadow-lg font-bold items-center justify-center  ms-3 text-sm">
                    {data.subtitle}
                  </span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
