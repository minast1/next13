"use client";
/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";
import Providers from "./providers";
import { Suspense } from "react";
import Loading from "@/components/loader";
import Modal from "@/components/modal";
import CartContent from "@/components/cartContent";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import StickyNav from "./inbox/components/stickyNav";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import useScrollStore from "@/stores/scrollStore";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  // productList: React.ReactNode;
}) {
  const setScrolled = useScrollStore((state) => state.setIsScrolled);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen w-full bg-cover bg-no-repeat bg-[url('/road.jpg')] bg-slate-500 bg-blend-overlay",
          inter.variable
        )}
      >
        <NavBar />

        {/* <Providers> */}

        <Sidebar />
        <div className=" ml-[275px] pr-10">
          <Card className="min-h-fit mb-5 rounded-2xl border-none bg-gray-300">
            <StickyNav />
            <CardContent
              className="max-h-[700px] px-0 pb-2 rounded-t-xl overflow-auto"
              onScroll={(e) => {
                if (e.currentTarget.scrollTop > 90) {
                  setScrolled(true);
                } else {
                  setScrolled(false);
                }
              }}
            >
              {children}
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  );
}
