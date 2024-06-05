"use client"

import { NextPage } from "next"
import { useEffect, useState } from "react"

type props={
  darkMode?:boolean
}


const Timer = ({darkMode=false}:props) => {
  const [tirageTime, setTirageTime] = useState(false);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/05/2024 11:26:01");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      
      let m = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
      let d = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((difference % (1000 * 60)) / 1000);

      if (s === 0) {
        if (min === 0) {
          if (h === 0) {
            if (d === 0) {
              if (m === 0) {
                setTirageTime(true);
                clearInterval(interval); 
                return;
              }
              m--;
              d = 30; 
            }
            d--;
            h = 24;
          }
          h--;
          min = 60; 
        }
        min--;
        s = 60;
      }
      
      setMonths(m);
      setDays(d);
      setHours(h);
      setMinutes(min);
      setSeconds(s);

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className={`flex items-center flex-col justify-center ${darkMode?"bg-black text-[#CA9335]":""} backdrop-blur-lg py-6 px-5 rounded-3xl`}>
            <p className="font-bold text-4xl">{months}</p>
            <p className=" text-sm">months</p>
        </div>
        <p className="text-3xl mx-1">:</p>
        <div className={`flex items-center flex-col justify-center ${darkMode?"bg-black text-[#CA9335]":""} backdrop-blur-lg py-6 px-5 rounded-3xl`}>
            <p className="font-bold text-4xl">{days}</p>
            <p className="text-sm">Days</p>
        </div>
        <p className="text-3xl mx-1">:</p>
        <div className={`flex items-center flex-col justify-center ${darkMode?"bg-black text-[#CA9335]":""} backdrop-blur-lg py-6 px-5 rounded-3xl`}>
            <p className="font-bold text-4xl">{hours}</p>
            <p className="text-sm">Hours</p>
        </div>
        <p className="text-3xl mx-1">:</p>
        <div className={`flex items-center flex-col justify-center ${darkMode?"bg-black text-[#CA9335]":""} backdrop-blur-lg py-6 px-5 rounded-3xl`}>
            <p className="font-bold text-4xl">{minutes}</p>
            <p className="text-sm">Minutes</p>
        </div>
        <p className="text-3xl mx-1">:</p>
        <div className={`flex items-center flex-col justify-center ${darkMode?"bg-black text-[#CA9335]":""} backdrop-blur-lg py-6 px-5 rounded-3xl`}>
            <p className="font-bold text-4xl">{seconds}</p>
            <p className="text-sm">Seconds</p>
        </div>
      </div>
    </div>
  )
};

export default Timer;
