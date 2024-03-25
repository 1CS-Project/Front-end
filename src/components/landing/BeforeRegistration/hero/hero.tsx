'use client'
import React, { useEffect, useState } from 'react'
import Timer from '../../common/timer'
import Link from 'next/link';
import { useLocale } from 'next-intl';
import AOS from 'aos';
import 'aos/dist/aos.css';
function hero() {

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
  return (
    <div className='flex items-center justify-center h-screen mb-[4rem] bg-fixed bg-center bg-cover' style={{ backgroundImage: `url(${bgImage})` }}>
      <div className='absolute top-0 left-0 right-0 bottom-0 z-[2]' />

      <div className='p-5 text-white z-[2] text-center mt-20'>
        <p
          data-aos="fade-down"
          data-aos-delay="50"
          className='amiri-quran-regular text-4xl'>وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَى كُلِّ ضَامِرٍ يَأْتِينَ مِنْ كُلِّ فَجٍّ عَمِيقٍ</p>
        <p data-aos="fade-right"
          data-aos-delay="50"
          className='mt-8 text-center font-medium text-xl'>from your decision to perform Hajj to the moment you fulfill your spiritual journey</p>
        <div data-aos="fade-right"
          data-aos-delay="50" className="my-4">
          <Link href={"/" + locale + "/signup"}>
            <button type="button"
              className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-xl rounded-xl m-4 w-1/4 border-gradient"
            >
              Register
            </button>
          </Link>
          <button type="button"
            className="text-white font-medium bg-transparent p-3 shadow-md rounded-xl  border border-white"
          >
            Registration of tirage
          </button>

        </div>
        <p data-aos="fade-right"
          data-aos-delay="50" className='mb-8 text-xl'>Still to the next tirage :</p>
        <Timer />
      </div>

    </div>
  )
}

export default hero