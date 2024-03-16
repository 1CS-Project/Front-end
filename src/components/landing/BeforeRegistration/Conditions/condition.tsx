'use client'
import { useState } from "react";
import "../../../../app/globals.css"
import Image from 'next/image'


function conditions() {
  const requirements = [
    "Hold Algerian nationality",
    "Possess a valid biometric passport at the time of registration",
    "Not have performed Hajj during the past seven (7) years",
    "Be at least nineteen (19) years old on the day of registration",
    "Be registered in one municipality without any other",
    "Mention the number of previous registrations.",
    "Mention the number of previous registrations.",
    "Mention the number of previous registrations.",
    "Mention the number of previous registrations."
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showAll, setShowAll] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [displayCount, setDisplayCount] = useState(7);

  const handleClick = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setDisplayCount(requirements.length);
    } else {
      setDisplayCount(7);
    }
  };

  {/* const textCircle = document.querySelector('.textCircle p');
  const innerText: string = "-------------------------------------------"; // Example innerText, replace with your actual text
  if (textCircle) {
    textCircle.innerHTML = innerText
      .split('')
      .map((char: string, i: number) => `<span style="transform rotate-${i * 8.3}">${char}</span>`)
      .join('');
  }*/}
  
  return (
    <section>
      <h1 className="text-center font-semibold text-3xl">Our Conditions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10rem] items-center mt-8">
        <div>
          {requirements.slice(0, displayCount).map((requirement, index) => (
            <p className="font-sans mb-3" key={index}>
              {index + 1} - {requirement}
            </p>
          ))}
          <button
            type="button"
            onClick={handleClick}
            className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl m-4 w-full border-gradient"
          >
            {showAll ? 'Hide Conditions' : 'See all Conditions'}
          </button>
        </div>
        {/*<div className="textCircle absolute w-full h-full anim">
            {innerText.split('').map((char: string, i: number) => (
              <span key={i} style={{ transformOrigin: '0 150px', fontSize: '1.2em', left: '50%', position: 'absolute', transform: `rotate(${i * 8.3}deg)` }}>{char}</span>

            ))}
          </div> */}
        <div className="relative w-[300px] h-[300px] rounded-full flex justify-center items-center">
        <Image
      src="/cond.png"
      width={900}
      height={900}
      alt="Picture of the author"
    />
        </div>
      </div>
    </section>
  )
}

export default conditions