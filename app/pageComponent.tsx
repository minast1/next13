"use client";
/* eslint-disable @next/next/no-img-element */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProducts } from "@/services/products/query";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

const HomeComponent = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  //console.log(data);

  return (
    <div className="flow-root py-3 px-2">
      <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        {data?.map((el) => (
          <li className="py-3 hover:cursor-pointer sm:py-4" key={el.id}>
            <Link href={`/${el.id}`}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-8 h-8 rounded-full"
                    src={el.image}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {el.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@windster.com
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {el.price}$
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeComponent;
