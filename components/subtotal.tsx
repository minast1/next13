import { Decimal } from "@prisma/client/runtime/library";
import React from "react";

const SubTotal = ({ total }: { total: Decimal | undefined }) => {
  return (
    <div className="mt-6 h-64 rounded-lg bg-gray-50 p-6 shadow-lg md:mt-0 md:w-full">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        {total && (
          <p className="text-gray-700">${total as unknown as number}</p>
        )}
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">$1000USD</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  );
};

export default SubTotal;
