import { getTirageRegData } from "@/app/action";

async function Registration() {
    let data=(await getTirageRegData()).data;
    console.log(data);
    
    return ( 
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto items-center justify-between mt-16">
          <div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">First name </p>
              <p>{data.firstname}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Last name </p>
              <p>{data.lastname}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Phone number </p>
              <p>{data.phoneNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Date of birth </p>
              <p>{data.dateOfBirth}</p>
            </div>
            
          </div>
  
          <div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Birth certeficate number </p>
              <p>{data.birthCerteficateNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Nationale identification number</p>
              <p>{data.nationalIdNumber}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Expiration date </p>
              <p>{data.passportExpirationDate}</p>
            </div>
            <div className="mb-3">
              <p className="font-medium underline text-lg mb-2">Gender  </p>
              <p>{data.gender}</p>
            </div>   
          </div>
  
  
        </div>
  
     );
}

export default Registration;