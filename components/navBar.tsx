"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { cartItems } from "./cartContent";
import IconButton from "./iconButton";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TbGridDots } from "react-icons/tb";

const NavBar = () => {
  return (
    <nav className="bg-transparent border-none px-4 lg:px-6 py-1 w-full">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <IconButton
            className="p-4"
            icon={
              <svg
                className="w-5 h-5 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            }
          />
          <Image
            src="/gamil.png"
            alt="gmailicon"
            className="mr-2"
            width={28}
            height={24}
          />
          <p className="font-medium text-2xl text-white mr-20">Gmail</p>

          <form>
            {/* <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Search
            </label> */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <Input
                className="rounded-3xl placeholder:text-gray-300 focus:ring-1 w-[680px] focus-visible:bg-white focus-visible:text-gray-400  pl-9 h-11 bg-gray-800  border-gray-600 bg-opacity-50 text-lg text-white font-normal"
                placeholder="Search"
              />
              <IconButton
                className="absolute end-2 bottom-1 hover:bg-gray-50 p-2.5 text-white"
                icon={
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
                  </svg>
                }
              />

              {/* <button
                type="submit"
                className="text-white absolute end-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button> */}
            </div>
          </form>

          <form action="#" method="GET" className="hidden lg:block lg:pl-2">
            {/* <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1 lg:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  {" "}
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />{" "}
                </svg>
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div> */}
          </form>
        </div>
        <div className="flex items-start gap-1">
          <IconButton
            className="p-3"
            icon={
              <svg
                className="w-5 h-5 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            }
          />
          <IconButton
            className="p-3"
            icon={
              <svg
                className="w-5 h-5 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <g
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M19 11V9a1 1 0 0 0-1-1h-.757l-.707-1.707.535-.536a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0l-.536.535L12 2.757V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v.757l-1.707.707-.536-.535a1 1 0 0 0-1.414 0L2.929 4.343a1 1 0 0 0 0 1.414l.536.536L2.757 8H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.757l.707 1.707-.535.536a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l.536-.535L8 17.243V18a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.757l1.707-.708.536.536a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-.535-.536.707-1.707H18a1 1 0 0 0 1-1Z" />
                  <path d="M10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                </g>
              </svg>
            }
          />
          <IconButton
            className="p-3"
            icon={<TbGridDots className="w-5 h-5 tet-white" />}
          />

          {/* User Dropdown menu  */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex text-sm mt-1 ml-2 bg-gray-800 rounded-full md:me-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                type="button"
              >
                <span className="sr-only">Open user menu</span>
                <Image
                  width={36}
                  height={36}
                  className="rounded-full"
                  src="/avatar-6.jpg"
                  alt="user photo"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mt-2">
              <DropdownMenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* <!-- Dropdown menu --> */}
          {/* <div
            id="dropdownAvatar"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
          >
            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
              <div>Bonnie Green</div>
              <div className="font-medium truncate">name@flowbite.com</div>
            </div>
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownUserAvatarButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
