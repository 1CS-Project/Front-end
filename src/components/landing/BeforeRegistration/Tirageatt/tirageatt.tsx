import Image from 'next/image';
import Link from 'next/link';
function tirageatt() {
  return (
    <div className='mt-24 flex flex-col items-center justify-center'>
      <div className='text-center'>
        <Image
          src="/image/tiragetime.png"
          width={150}
          height={150}
          alt="confirmation"
          className='mx-auto'
        />
        <p className='font-bold text-xl mt-8'>Hajj Selection: Pathway to Sacred Pilgrimage</p>
        <p className='w-[50%] mx-auto mt-4 text-gray-500'>Discover your destiny: the results of the Hajj draw will be revealed soon. Stay tuned to see if you&apos;re chosen for this sacred journey.</p>
        <Link href={"/"}>
          <button type="button"
            className="w-[50%] text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-xl rounded-xl m-4 border-gradient"
          >
            Return to the main page 
          </button>
        </Link>
      </div>
    </div>
  )
}

export default tirageatt