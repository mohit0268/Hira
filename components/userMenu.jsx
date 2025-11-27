"use client";

import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const userMenu = () => {
  return (
    <UserButton
      appearance={{
        elements: {
          avatarBox: "w-20 h-20 rounded-full",
        },
      }}
    >
      <UserButton.MenuItems>
        <UserButton.Link
          label="Organisation"
          labelIcon={<ChartNoAxesGantt size={15}/>}
          href="/onboarding"
        />
      </UserButton.MenuItems>
    </UserButton>
  );
};

export default userMenu;
