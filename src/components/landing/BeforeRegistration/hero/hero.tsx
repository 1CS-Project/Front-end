'use client'
import React, { useEffect, useState } from 'react'
import Timer from '../../common/timer'
import Link from 'next/link';
import { useLocale } from 'next-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslations } from "next-intl";
import Image from 'next/image';


type props={
  startDate?:Date,
  endDate?:Date,
  hadjStart?:Date,
}


function hero({startDate,endDate,hadjStart}:props) {


  const notDefinedYet=!hadjStart||!startDate||!endDate;
   
  const t = useTranslations("home");
  
  const [currentTime,setCurrent]=useState(new Date());

  const showTimer=startDate&&endDate&&(currentTime<startDate);
  const hadjStarted=hadjStart?currentTime>hadjStart:false;
  const regStillNot=startDate?currentTime<startDate:false;
  const regStart=(startDate!==undefined&&endDate!==undefined)?(currentTime>=startDate)&&(currentTime<=endDate):false;
  


  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  })

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [bgImage, setBgImage] = useState("/image/hero1.png");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const images = ["/image/hero1.png", "/image/hero2.png", "/image/hero3.png"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBgImage(images[currentIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(()=>{
    let interval:NodeJS.Timeout;
    if (showTimer){
      interval=setInterval(()=>{
        console.log("rerender");
        
        setCurrent(prev=>{
          if (prev>startDate){
            clearInterval(interval);
            return prev;
          }else{
            return new Date()
          }
        })

      },1000)
    }
    return ()=>clearInterval(interval)
  },[])
  return (
    <div className='flex relative items-center justify-center h-screen mb-[4rem]'>
    <Image className='absolute top-0 bg-fixed w-full h-full bg-center bg-cover' alt='background image' src={bgImage} width={1000} height={1000}/>

      <div className='p-5 text-white z-[2] text-center mt-20'>
        <p
          data-aos="fade-down"
          data-aos-delay="50"
          className='amiri-quran-regular text-4xl'>وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَى كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ</p>
        <p data-aos="fade-right"
          data-aos-delay="50"
          className='mt-8 text-center font-medium text-xl'>  {t("from")}</p>
          <div data-aos="fade-right"
          data-aos-delay="50" className="my-4">
          <Link href={"/" + locale + "/signup"}>
            <button type="button"
              className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-xl rounded-xl m-4 w-1/4 border-gradient"
            >
            {t("regbutton")}
            </button>
          </Link>

            <Link 
              href={(regStart?"/" + locale + "/tirage_reg":"")}
              className={`text-white font-medium ${regStart?"":"pointer-events-none"} bg-transparent p-3 shadow-md rounded-xl  border border-white`}
            >
              {t("insbutton")}
            </Link>

        </div>
        <p data-aos="fade-right"
          data-aos-delay="50" className='mb-8 text-xl'>{regStart?t("regOpen"):regStillNot?t("still"):hadjStarted?"Hadj is ended for this year":"Registration is closed"}</p>
        {!notDefinedYet&&!hadjStarted&&<Timer startDate={startDate}/>}
      </div>

    </div>
  )
}

export default hero