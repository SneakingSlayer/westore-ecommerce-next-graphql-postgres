import React from "react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container mx-auto h-full flex flex-col">
      <Navbar />
      <main className="pl-4 pr-4 pt-4 ">{children}</main>
      <Footer />
    </div>
  );
};
