"use client";
import { Mail } from "@prisma/client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import PrimaryListItem from "./primaryListItem";
import useScrollStore from "@/stores/scrollStore";

const PrimaryClientComponentPage = ({ userMails }: { userMails: Mail[] }) => {
  return (
    <div className="border border-fuchsia-700">
      {userMails.map((items) => (
        <PrimaryListItem data={items} key={items.id} />
      ))}
    </div>
  );
};

export default PrimaryClientComponentPage;
