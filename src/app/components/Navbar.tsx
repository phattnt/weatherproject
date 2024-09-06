"use client"
import React from "react";
import ModeToggle from "./theme-toggle";
import Search from "./search";
import { useRouter } from "next/router";
import { GlobalContextProvider, useGlobalContext } from "../context/globalContext";

export default function Navbar() {
  const {state} = useGlobalContext();
  return (
    <div className="flex py-4 w-screen justify-center items-center gap-3 px-1">
      <ModeToggle />
      <Search/>
    </div>
  );
}


