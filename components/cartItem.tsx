"use client";
import {
  decreamentProductItemQuantity,
  increamentProductItemQuantity,
  removeFromCart,
} from "@/app/actions";
//import useCartStore from "@/stores/cartStore";
/* eslint-disable @next/next/no-img-element */
import { ProductType } from "@/types";
import { Product } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const CartItem = ({ price, id, title, image, qty }: Product) => {
  const router = useRouter();

  return (
    <div
      data-testid="cartItem"
      className="flex justify-between mb-4 rounded-lg bg-gray-50 p-3 shadow-md"
    >
      <div className="relative w-24 h-[70px]">
        <Image alt={title} src={image} fill />
      </div>

      <div className=" flex flex-col ml-2 mt-5 sm:mt-0 w-36 flex-wrap">
        <h2 className="text-sm font-bold text-gray-900">{title}</h2>
        <p title="price" className="mt-1 text-xs text-gray-700">{`${Number(
          price
        )}₵`}</p>
      </div>
      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
        <div className="flex items-center border-gray-100">
          <button
            title="addQty"
            onClick={() => increamentProductItemQuantity(id)}
            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
          >
            {" "}
            +{" "}
          </button>
          <div
            className="h-8 w-8 border bg-white text-center text-black flex items-center justify-center text-xs outline-none"
            title="itemCount"
            //onChange={(e) => recompute(e)}
            // min={count}
          >
            {qty}
          </div>
          <button
            title="reduceQty"
            onClick={() => decreamentProductItemQuantity(id)}
            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
          >
            {" "}
            -{" "}
          </button>
        </div>
        <div className="flex justify-end">
          <svg
            onClick={() => {
              removeFromCart(id);
              router.refresh();
            }}
            className="w-4 h-4 text-red-500 hover:cursor-pointer"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 20"
          >
            <title>Delete</title>
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
