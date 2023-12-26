import React from "react";
import PrimaryListItem from "./component/primaryListItem";
import prisma from "@/lib/prisma";
import { Mail } from "@prisma/client";
import PrimaryClientComponentPage from "./component/primaryClientComponentPage";

const PrimaryInboxPage = async () => {
  const userMails: Mail[] = await prisma.mail.findMany({
    where: {
      userId: "clqee3pa800032yryu20umrfu",
    },
  });

  return (
    <div>
      {userMails.map((items) => (
        <PrimaryListItem data={items} key={items.id} />
      ))}
    </div>
  );
};

export default PrimaryInboxPage;
