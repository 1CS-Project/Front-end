"use client"
import { useTranslations } from 'next-intl';
import Image from 'next/image';

function Steps() {
  const t = useTranslations("journey");
  return (
    <section className='mt-[8rem] scroll-mt-20' id='steps-section'>
      <h1 className="text-center font-semibold text-3xl mb-[4rem]">{t("header")}</h1>

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
        <h1 className="font-semibold text-xl mb-3">{t("exam")}</h1>
          <p className=''>{t("examinfo")}</p>
      
          
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        
        <div  data-aos="fade-right">
          
          <h1 className="font-semibold text-xl mb-3">{t("accom")}</h1>
          <p className=''>{t("accominfo")}</p>
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
        <h1 className="font-semibold text-xl mb-3">{t("pay")}</h1>
          <p className=''>{t("payinfo")}</p>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-[10em] items-center justify-between mt-20">
        
        <div  data-aos="fade-right">
          
          <h1 className="font-semibold text-xl mb-3">{t("step")}</h1>
          <p className=''>{t("stepinfo")}</p>
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
