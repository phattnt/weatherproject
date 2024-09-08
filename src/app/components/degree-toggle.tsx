"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { useGlobalContext } from "../context/globalContext";

export default function DegreeToggle() {
  const {changedegree, setChangedegree} = useGlobalContext();
  const actionChange = () => {
    setChangedegree(!changedegree);
  };
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        actionChange();
      }}
    ></Button>
  );
}
