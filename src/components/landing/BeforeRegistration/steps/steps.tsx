"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Steps() {
  const t = useTranslations("journey");
  return (
    <section className='mt-[8rem] scroll-mt-20' id='steps-section'>
      <h1 className="text-center font-semibold text-3xl mb-[4rem]">Unlock the journey to Mecca with these essential steps</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-8">
        
        <div  data-aos="fade-right">
          
          <h1 className="font-semibold text-xl mb-3">{t("reg")}</h1>
          <p className=''>{t("regInfo")}</p>
        </div>
        {/*<div className="textCircle absolute w-full h-full anim">
            {innerText.split('').map((char: string, i: number) => (
              <span key={i} style={{ transformOrigin: '0 150px', fontSize: '1.2em', left: '50%', position: 'absolute', transform: `rotate(${i * 8.3}deg)` }}>{char}</span>

            ))}
          </div> */}
        <div data-aos="fade-left" >
          <Image
            src="/image/registration.png"
            width={350}
            height={250}
            alt="registration"
            className='rounded-xl'
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        <div  data-aos="fade-right" >
        <Image
            src="/image/exam.png"
            width={350}
            height={300}
            alt="Picture of the author"
            className='rounded-xl'
          />
            </div>
      
        <div data-aos="fade-left" >
        <h1 className="font-semibold text-xl mb-3">Examination</h1>
          <p className=''>In this step, pilgrims are guided through the process of scheduling and attending medical examinations to assess their physical fitness and readiness for the rigorous journey ahead.
In this step, pilgrims are guided through the process of scheduling and attending medical examinations to assess their physical fitness and readiness for the rigorous journey ahead.</p>
      
          
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        
        <div  data-aos="fade-right">
          
          <h1 className="font-semibold text-xl mb-3">Accommodation</h1>
          <p className=''>In this step, pilgrims are presented with a comprehensive list of available hotels, ranging from budget-friendly options to luxury accommodations, conveniently located near the holy sites.
 Each hotel listing includes detailed information such as amenities, room types, proximity to religious landmarks, and pricing options.</p>
        </div>
        {/*<div className="textCircle absolute w-full h-full anim">
            {innerText.split('').map((char: string, i: number) => (
              <span key={i} style={{ transformOrigin: '0 150px', fontSize: '1.2em', left: '50%', position: 'absolute', transform: `rotate(${i * 8.3}deg)` }}>{char}</span>

            ))}
          </div> */}
        <div data-aos="fade-left" >
          <Image
            src="/image/accom.png"
            width={350}
            height={350}
            alt="Picture of the author"
            className='rounded-xl'
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        <div  data-aos="fade-right" >
        <Image
            src="/image/paym.png"
            width={350}
            height={300}
            alt="Picture of the author"
            className='rounded-xl'
          />
            </div>
      
        <div data-aos="fade-left" >
        <h1 className="font-semibold text-xl mb-3">Payment</h1>
          <p className=''>In this step, pilgrims are provided with a secure and user-friendly platform to settle their bills and fees associated with the pilgrimage, including registration fees, accommodation costs, transportation expenses, and any additional charges. Pilgrims can conveniently view a detailed breakdown of their expenses, including itemized costs and any applicable taxes or surcharges.</p>
      
          
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        
        <div  data-aos="fade-right">
          
          <h1 className="font-semibold text-xl mb-3">Follow Your Hadj Step by Step</h1>
          <p className=''>In this step, pilgrims gain access to a curated series of resources, tools, and information to navigate each stage of the Hajj pilgrimage with confidence and ease. From the initial preparations to the culmination of rituals in Mecca, pilgrims receive step-by-step instructions, practical tips, and spiritual guidance to ensure a meaningful and fulfilling experience.</p>
        </div>
        {/*<div className="textCircle absolute w-full h-full anim">
            {innerText.split('').map((char: string, i: number) => (
              <span key={i} style={{ transformOrigin: '0 150px', fontSize: '1.2em', left: '50%', position: 'absolute', transform: `rotate(${i * 8.3}deg)` }}>{char}</span>

            ))}
          </div> */}
        <div data-aos="fade-left" >
          <Image
            src="/image/steep.png"
            width={350}
            height={350}
            alt="Picture of the author"
            className='rounded-xl'
          />
        </div>
      </div>
      
    </section>
  );
}

export default Steps;
