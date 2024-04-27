'use client'
import { useEffect, useState } from "react";
import "../../../../app/globals.css"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css'; 



function conditions() {




  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    AOS.init({
      duration:1000,
      easing:"ease",
      once:true,
      anchorPlacement:"top-bottom",
    });
  })


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
  const innerText: string = "-------------------------------------------"; 
  if (textCircle) {
    textCircle.innerHTML = innerText
      .split('')
      .map((char: string, i: number) => `<span style="transform rotate-${i * 8.3}">${char}</span>`)
      .join('');
  }*/}

  return (
    <section className="scroll-mt-20" id="conditions-section" >
      <h1 data-aos="fade-down" className="text-center font-semibold text-3xl">Our Conditions</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[13em] items-center justify-between mt-8">
        <div>
          {requirements.slice(0, displayCount).map((requirement, index) => (
            <p data-aos="fade-right" className="font-sans mb-3 text-md" key={index}>
              {index + 1} - {requirement}
            </p>
          ))}
          <button
          data-aos="fade-right"
            type="button"
            onClick={handleClick}
            className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-md rounded-xl mt-4 w-full border-gradient"
          >
            {showAll ? 'Hide Conditions' : 'See all Conditions'}
          </button>
        </div>
        {/*<div className="textCircle absolute w-full h-full anim">
            {innerText.split('').map((char: string, i: number) => (
              <span key={i} style={{ transformOrigin: '0 150px', fontSize: '1.2em', left: '50%', position: 'absolute', transform: `rotate(${i * 8.3}deg)` }}>{char}</span>

            ))}
          </div> */}
        <div data-aos="fade-left" className="relative md:w-[300px] md:h-[400px] w-[80%] h-[80%] border-[3px] flex justify-center items-center border-gray-500 rounded-lg">
          <Image
            src="/image/cond.png"
            width={350}
            height={350}
            alt="Picture of the author"
            className="-rotate-12 rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default conditions