import { getBaladiaCentres, getCandidatExaminationStatus } from "@/app/action";
import Image from "next/image";
import Hospital from "../../common/icons/hospital";

async function Examination() {
  const baladiaHospitals=await getBaladiaCentres();
  const examinationStatus=await getCandidatExaminationStatus();
  
    return ( 
        <div>
            <div className="flex justify-between  items-center">
                <p 
                // data-aos="fade-down" 
                className="text-center font-semibold text-xl">
                  &apos;🥳&apos; Congratulations on your successful pilgrimage! Now that you&apos;ve reached this important milestone, let&apos;s take the next steps to complete your journey. Here&apos;s what you need to do.
                </p>
                <Image
                  // data-aos="fade-left"
                  src={"/image/medal.png"}
                  width={80}
                  height={80}
                  alt=""
                />
            </div>
            <div className="py-10">
                <h1 className="font-medium text-xl">
                  1- Go to one of this hospitals in the specified time:
                </h1>
                <div className="mt-2 px-8">
                    {baladiaHospitals?.map((e)=>(
                      <div key={e.id}>
                        <h1 className="font-medium text-lg text-green-500 flex gap-x-2 items-start">
                          <Hospital/>
                          {e.nameCenter}
                        </h1>
                        <div className="pb-2 px-4">
                          <h1><span className="font-medium">From:</span> {new Date(e.dateDebut).toDateString()}</h1>
                          <h1><span className="font-medium">To:</span>  {new Date(e.dateFin).toDateString()}</h1>
                        </div>
                      </div>
                    ))}
                </div>
                <h1 className="font-medium text-xl mt-4">With these papers to complete the medical examination:</h1>
                <ul  className="mt-2 px-8">
                  <li className="my-2">• A qualification certificate issued by the municipal services</li>
                  <li className="mb-2">• Card de vaccination - covid - (if exist)</li>
                  <li className="mb-2">• Biometric passport.</li>
                  <li className="mb-2">• National ID card.</li>
                </ul>
                <h1 className="text-xl mt-4 font-medium"> After the medical examination, wait for the results from the doctor</h1>
                <div className="p-4">
                    <h1 className="text-xl font-medium">Your result:</h1>
                    <div className="mt-4 flex gap-4 justify-center items-center ">
                      <button disabled={!examinationStatus?.data || examinationStatus.data?.status==="accepted"}  className=" w-[25%] flex pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#a12e0edb] px-4 py-2 text-white font-medium rounded-lg">
                        Failed
                      </button>
                      <button disabled={!examinationStatus?.data || examinationStatus.data?.status==="rejected"}  className="w-[25%] flex  pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                        Success
                      </button>
                    </div>
                    {examinationStatus&&examinationStatus.data?.note&&<div>
                      <h1 className="text-xl mt-2 font-medium">Note:</h1>
                      <p className="p-2 text-lg">
                        {examinationStatus.data?.note}
                      </p>
                    </div>}
                </div>
              
                {examinationStatus?.gender==="female"&&
                <div className="p-4">
                  <h1 className="text-xl font-medium">Your Mahrem result:</h1>
                  <div className="mt-4 flex gap-4 justify-center items-center ">
                    <button disabled={!examinationStatus.dataMahrem || examinationStatus.dataMahrem?.status==="accepted"}  className=" w-[25%] flex pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#a12e0edb] px-4 py-2 text-white font-medium rounded-lg">
                      Failed
                    </button>
                    <button disabled={!examinationStatus.dataMahrem || examinationStatus.dataMahrem?.status==="rejected"}  className="w-[25%] flex  pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                      Success
                    </button>
                  </div>
                  {examinationStatus&&examinationStatus.dataMahrem?.note&&<div>
                    <h1 className="text-xl mt-2 font-medium">Note:</h1>
                    <p className="p-2 text-lg">
                      {examinationStatus.dataMahrem?.note}
                    </p>
                  </div>}
                </div>}

                {examinationStatus?.gender==="female"&&(!examinationStatus.data || !examinationStatus.dataMahrem)&&
                  <h1 className="text-center text-xl font-medium mt-4 text-red-600">Both must be accepeted so you can move to the next step</h1>
                }
               
            </div>
        </div>
     );
}

export default Examination;