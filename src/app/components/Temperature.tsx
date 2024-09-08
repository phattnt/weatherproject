"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/globalContext";
import { kelvinToCelsius, windspeedchange, kelvinToF } from "@/lib/misc";
import { Skeleton } from "@/components/ui/skeleton";
import {
  drizzleIcon,
  rain,
  snow,
  clearSky,
  cloudy,
  navigation,
} from "@/lib/Icon";
import { WindIcon } from "lucide-react";
import moment from "moment";

function Temperature() {
  const { forecast, changedegree } = useGlobalContext();
  const { main, timezone, name, weather, wind } = forecast;
 
  if (!forecast || !weather) {
    return (
      <Skeleton className="h-[10rem] w-full rounded-xl dark:bg-[#484c53] bg-[#f5d8c5] " />
    );
  }

  if(changedegree === false){
    var temp = kelvinToCelsius(main?.temp);
  }
  else {
    var temp = kelvinToF(main?.temp);
  }

  const windspeed = windspeedchange(wind?.speed);
  const [localtime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  const { main: weatherMain, description } = weather[0];
  const getIcon = () => {
    switch (weatherMain) {
      case "Drizzle":
        return drizzleIcon;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Clear":
        return clearSky;
      case "Clouds":
        return cloudy;
      default:
        return clearSky;
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const localMoment = moment().utcOffset(timezone / 60);
      const formatedTime = localMoment.format("HH:mm:ss");
      const day = localMoment.format("dddd");
      setLocalTime(formatedTime);
      setCurrentDay(day);
    }, 1000);
    return () => clearInterval(interval);
  }, [timezone]);
  return (
    <div className="flex w-full flex-col h-full justify-between">
      <div className="flex flex-col gap-1">
        <p className="flex justify-between">
          <span className="font-medium">{currentDay}</span>
          <span className="font-medium">{localtime}</span>
        </p>
        <p className="flex gap-2 font-bold first-letter:mt-4">
          <span>{name === "Ho Chi Minh City" ? "Sai Gon" : name}</span>
          <span>{navigation}</span>
        </p>
        <div className="flex flex-col">
          <p className="flex gap-2 font-bold capitalize">
            <span>{description}</span>
          </p>
          <span>{getIcon()}</span>
        </div>
      </div>
      <p className="text-6xl text-center py-10">
        <span>{temp}°</span>
      </p>
      <div className="flex flex-col gap-3">
        <p className="flex justify-between">
          Wind Speed
          <div className="flex gap-2">
            <WindIcon />
            <span>{windspeed}</span>
            Km/h
          </div>
        </p>
        <p className="flex justify-between">
          Humidity
          <span>{main.humidity}%</span>
        </p>
        <p className="flex justify-between">
          Pressure
          <span>{main.pressure}mb</span>
        </p>
      </div>
    </div>
  );
}

export default Temperature;
