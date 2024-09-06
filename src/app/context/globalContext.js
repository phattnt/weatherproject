"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [forecast, setForecast] = useState({});
  const [geoCodedList, setGeoCodedList] = useState("Lmao");
  const [activeCityCoords, setActiveCityCoords] = useState([
    51.752021, -1.257726,
  ]);

  const fetchForecast = async (lat,lon) => {
    try{
      const res = await axios.get("api/weather");
      setForecast(res.data);
    } catch(error) {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchForecast();
  }, []);
  return (
    <GlobalContext.Provider value={{forecast,}}>
      <GlobalContextUpdate.Provider >{children}</GlobalContextUpdate.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
