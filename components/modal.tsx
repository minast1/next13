"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useRouter, useSearchParams } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const onDismiss = React.useCallback(() => {
    router.back();
  }, [router]);
  const searchParams = useSearchParams();
  let open: boolean = searchParams.get("modal")
    ? JSON.parse(searchParams.get("modal") as string)
    : false;

  return (
    <Sheet open={open} onOpenChange={onDismiss}>
      <SheetContent
      //onPointerDownOutside={onDismiss}
      //// onEscapeKeyDown={onDismiss}
      >
        <SheetHeader className="mb-5">
          <SheetTitle>
            <div className="flex items-center text-base font-semibold text-gray-500">
              <svg
                className="w-4 h-4 mr-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              Cart Items
            </div>
          </SheetTitle>
        </SheetHeader>
        {children}
      </SheetContent>

      <SheetFooter>
        {/* <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
                </SheetClose> */}
      </SheetFooter>
    </Sheet>
  );
};

export default Modal;
