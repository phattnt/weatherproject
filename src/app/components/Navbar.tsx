import React from "react";
import ModeToggle from "./theme-toggle";
import Search from "./search";

function Navbar() {
  return (
    <div className="flex py-4 w-screen justify-center items-center gap-3 px-1">
      <ModeToggle />
      <Search/>
    </div>
  );
}

export default Navbar;
