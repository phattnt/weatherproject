import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function GET(req: NextRequest) {
    try{
        const apikey = process.env.OPENWEATHERAPP_API_APP;
        const lat = 10.8333;
        const lon = 106.6667;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
        const res = await axios.get(url);
        return NextResponse.json(res.data);
    }
    catch (error){
        console.log("Error fetching forecast data");
        return new Response("Error fetching forecast data", {status:500})
    }
}