import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { kelvinToCelsius, kelvinToF } from "@/lib/misc";
import {
  drizzleIcon,
  rain,
  snow,
  clearSky,
  cloudy,
  navigation,
} from "@/lib/Icon";
import { Card, CardContent } from "@/components/ui/card";
import { useGlobalContext } from "../context/globalContext";
function Forecast() {
  const { fiveDayForecast, changedegree } = useGlobalContext();
  const forecast = fiveDayForecast.list;

  const temp = (item: number) => {
    if (changedegree === false) {
      return kelvinToCelsius(item);
    } else return kelvinToF(item);
  };
  const changeTime = (item: any) => {
    return (item = new Date(item).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }));
  };
  const changeDate = (item: any) => {
    return new Date(item).toLocaleDateString([], {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };
  const getIcon = (weatherMain: any) => {
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
  if (!fiveDayForecast)
    return (
      <Skeleton className="h-[10rem] w-full rounded-xl dark:bg-[#484c53] bg-[#f5d8c5] " />
    );
  return (
    <Carousel
      className="w-full max-w-[35rem] flex ml-0 lg:ml-12"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {forecast?.map((item: any, index: any) => (
          <CarouselItem key={index} className="basis-1/2">
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-between p-6 w-full">
                  <div className="flex flex-col items-center">
                    <span>{changeDate(item.dt_txt)}</span>
                    <span>{getIcon(item.main)}</span>
                  </div>
                  <span className="text-4xl font-bold">
                    {temp(item.main.temp)}°
                  </span>
                  <div className="flex flex-col items-center">
                    <span>{changeTime(item.dt_txt)}</span>
                    <span className="capitalize">
                      {item.weather[0].description}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default Forecast;
