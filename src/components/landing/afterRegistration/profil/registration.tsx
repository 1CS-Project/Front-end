import { getTirageRegData } from "@/app/action";
import Image from "next/image";

async function Registration() {
    let data=(await getTirageRegData())?.data;
    console.log(data);
    
    return ( 
      <div>
          <div className="flex justify-center items-center">
            <div className="overflow-hidden rounded-full w-20 h-20">
              <img className="object-cover" alt="image" src={`${process.env.NEXT_PUBLIC_BACKEND}/${data?.imageUrl}`} width={100} height={100}/>
            </div>
          </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center justify-between mt-12">
          <div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">First name </p>
              <p>{data?.firstname}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Last name </p>
              <p>{data?.lastname}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Phone number </p>
              <p>{data?.phoneNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Date of birth </p>
              <p>{data?.dateOfBirth}</p>
            </div>
            
          </div>
  
          <div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Birth certeficate number </p>
              <p>{data?.birthCerteficateNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Nationale identification number</p>
              <p>{data?.nationalIdNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Expiration date </p>
              <p>{data?.passportExpirationDate}</p>
            </div>
            <div className="mb-3">
              <p className="font-bold text-lg mb-1">Gender  </p>
              <p>{data?.gender}</p>
            </div>   
          </div>

      </div>
  
  
        </div>
  
     );
}

export default Registration;