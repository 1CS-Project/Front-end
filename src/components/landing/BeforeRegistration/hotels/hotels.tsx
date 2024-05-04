'use client'
import Image from "next/image"
import Link from "next/link"
import ReactStars from 'react-stars'
import { IconArrowRight, IconArrowLeft ,IconMapPin} from '@tabler/icons-react';
import { useState } from "react";


const slides = [
  "/image/hotels/hotels1.png",
  "/image/hotels/hotels2.png",
  "/image/hotels/hotels11.png",
]


function hotels() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="mt-24 mx-10 h-full">
      <h1 className="text-center font-semibold text-xl mb-4"> Hotels</h1>
      <div className="items-center gap-4 justify-around grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden relative">
            <div className="flex transition ease-out duration-40"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}>
              {slides.map((s, index) => (
                <Image width={650} height={550} key={index} src={s} alt={`slide-${index}`} />
              ))}
            </div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10">
              <button onClick={previousSlide} className="bg-black rounded-full p-2">
                <IconArrowLeft stroke={2} />
              </button>

              <button onClick={nextSlide} className="bg-black rounded-full p-2">
                <IconArrowRight stroke={2} />
              </button>
            </div>
            <div className="absolute bottom-2 py-4 flex justify-center gap-3 w-full">
              {slides.map((s, i) => {
                return (
                  <div
                    onClick={() => {
                      setCurrent(i);
                    }}
                    key={"circle" + i}
                    className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-400"
                      }`}
                  ></div>
                );
              })}
            </div>
          </div>

          <div className="absolute left-6 bottom-12 text-white">
            <p className="font-bold">Makkah Clock Royal Tower, A Fairmont Hotel.</p>
            <p className="text-gray-300">King Abdul Aziz Endowment</p>
            <ReactStars
              edit={false}
              value={4}
              count={5}
              size={24}
              color2={'#ffd700'} />
            <Link className="underline font-semibold" href={"/learnmorehotel"}>
              Learn more
            </Link>
          </div>
        </div>
        <div>
            <div className="mb-6 lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-40 lg:w-36 flex-none bg-cover rounded-t-l lg:rounded-t-l lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: 'url("/image/hotels/hotels3.png")' }}
                title="hotel"
              >
              </div>
              <div className="h-40 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                  
                  <div className="text-gray-900 font-bold">
                  Makkah Clock Royal Tower, A Fairmont Hotel.            
                      </div>
                  <p className="text-gray-700 text-base">
                  King Abdul Aziz Endowment
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="bg-black text-white p-1 rounded-lg">7,8</p>
                  <p className="font-semibold underline">Excellent</p>
                  <p className="text-gray-400">(133 reviews)</p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <IconMapPin stroke={2} />
                  <p>5,5 miles to mecca</p>
                </div>
                <Link className="underline font-semibold" href={"/learnmorehotel"}>
                Learn more
              </Link>
              </div>
            </div>

            <div className="mb-6 lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-40 lg:w-36 flex-none bg-cover rounded-t-l lg:rounded-t-l lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: 'url("/image/hotels/hotels6.png")' }}
                title="hotel"
              >
              </div>
              <div className="h-40 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                  
                  <div className="text-gray-900 font-bold">
                  Makkah Clock Royal Tower, A Fairmont Hotel.            
                      </div>
                  <p className="text-gray-700 text-base">
                  King Abdul Aziz Endowment
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="bg-black text-white p-1 rounded-lg">7,8</p>
                  <p className="font-semibold underline">Excellent</p>
                  <p className="text-gray-400">(133 reviews)</p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <IconMapPin stroke={2} />
                  <p>5,5 miles to mecca</p>
                </div>
                <Link className="underline font-semibold" href={"/learnmorehotel"}>
                Learn more
              </Link>
              </div>
            </div>

            <div className="mb-6 lg:max-w-full lg:flex">
              <div
                className="h-36 lg:h-40 lg:w-36 flex-none bg-cover rounded-t-l lg:rounded-t-l lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: 'url("/image/hotels/hotels4.png")' }}
                title="hotel"
              >
              </div>
              <div className="h-40 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-1">
                  
                  <div className="text-gray-900 font-bold">
                  Makkah Clock Royal Tower, A Fairmont Hotel.            
                      </div>
                  <p className="text-gray-700 text-base">
                  King Abdul Aziz Endowment
                  </p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="bg-black text-white p-1 rounded-lg">7,8</p>
                  <p className="font-semibold underline">Excellent</p>
                  <p className="text-gray-400">(133 reviews)</p>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <IconMapPin stroke={2} />
                  <p>5,5 miles to mecca</p>
                </div>
                <Link className="underline font-semibold" href={"/learnmorehotel"}>
                Learn more
              </Link>
              </div>
            </div>

            

            
            <div className="text-right ">
              <Link className="underline font-semibold " href={"/allhotels"}>
                  See all
                </Link>
            </div>
            
          
        </div>
      </div>
    </div>
  )
}

export default hotels