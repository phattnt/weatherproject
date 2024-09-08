import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export async function GET(req: NextRequest) {
  try {
    const apikey = process.env.OPENWEATHERAPP_API_APP;

    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const res = await axios.get(url);
    
    return NextResponse.json(res.data);
    
  } catch (error) {
    console.log("Error fetching forecast data");
    return new Response("Error fetching forecast data", { status: 500 });
  }
}
