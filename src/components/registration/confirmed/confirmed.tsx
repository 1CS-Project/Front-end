import Image from 'next/image';
import Link from 'next/link';

function Confirmation() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center'>
        <Image
          src="/image/emcond.png"
          width={300}
          height={300}
          alt="confirmation"
          className='mx-auto'
        />
        <p className='font-bold text-xl mt-8'>Email confirmed</p>
        <p className='w-[50%] mx-auto mt-4 text-gray-500'>Your email address has been successfully confirmed. Thank you for verifying your email. You may now proceed with accessing our services. If you have any further questions or require assistance, please don&apos;t hesitate to contact us.</p>
        <Link href={"/"}>
          <button type="button"
            className="w-[50%] text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright p-3 shadow-xl rounded-xl m-4 w-1/4 border-gradient"
          >
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Confirmation;