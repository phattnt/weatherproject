"use client"
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex w-full justify-center items-center mt-8 transition-all duration-500 ease-in-out">
        <div className="flex flex-col h-[30rem] w-[20rem] rounded-2xl p-4 dark:bg-[#222831] bg-[#EECEB9] ">
          <Temperature/>
        </div>
      </div>
    </main>
  );
}
