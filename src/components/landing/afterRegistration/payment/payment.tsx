import { getBaladyaBanks, getCandidatPaymentStatus } from "@/app/action";
import Image from "next/image"

async function Payment() {
  const banks=await getBaladyaBanks();
  const payment=await getCandidatPaymentStatus();

  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="font-semibold text-lg "> 1) Tu devras te rendre aux agences de la Banque d’Algérie pour effectuer le paiement des frais de pèlerinage et obtenir un reçu de paiement des prestations du hadj, dont le montant s’élève à <span className="text-blue-500 underline">850 000 dinars</span> , ainsi que le paiement du billet de voyage <span className="text-blue-500 underline">(170 000 dinars)</span>. Pour ce faire, tu devras fournir les documents suivants :</p>
        <ul className="font-medium mt-4">
          <li>- Un passeport biométrique dont la validité est d’au moins six mois.</li>
          <li className="my-2">- Certificat du succès au tirage au sort. </li>
          <li>- Certificat de qualification sanitaire.</li>
        </ul>
        <p className="font-semibold text-lg mt-4 ">2) After making the payment at the bank, wait for the results</p>
        {/* <div className="mt-4 flex gap-4 justify-center items-center ">
            <button disabled={!payment || payment.status==="accepted"}  className=" w-[25%] flex pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#a12e0edb] px-4 py-2 text-white font-medium rounded-lg">
              Failed
            </button>
            <button disabled={!payment || payment.status==="rejected"}  className="w-[25%] flex  pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
              Success
            </button>
        </div> */}
        {banks&&<div>
          <h1 className="text-xl my-2 font-medium">Banks:</h1>
          {banks.map((e)=>(
            <div  key={e.id} className="px-4 space-y-2">
              <h1 className="font-semibold">
                {e.BanqueName}
              </h1>
              <h1 className="">
                <span className="font-semibold">From:</span> {new Date(e.dateDebut).toDateString()}
              </h1>
              <h1>
                <span className="font-semibold">To:</span> {new Date(e.dateFin).toDateString()}
              </h1>
            </div>
          ))}
        </div>}
          <h1 className="text-xl my-2 font-medium">Your result:</h1>
         <div className="p-4">
                    <div className="mt-4 flex gap-4 justify-center items-center ">
                      <button disabled={!payment?.data || payment.data?.status==="accepted"}  className=" w-[25%] flex pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#a12e0edb] px-4 py-2 text-white font-medium rounded-lg">
                        Failed
                      </button>
                      <button disabled={!payment?.data || payment.data?.status==="rejected"}  className="w-[25%] flex  pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                        Success
                      </button>
                    </div>
            </div>
            {payment?.gender==="female"&&
            <>
                  <h1 className="text-xl font-medium">Your Mahrem result:</h1>
                <div className="p-4">
                  <div className="mt-4 flex gap-4 justify-center items-center ">
                    <button disabled={!payment.dataMahrem || payment.dataMahrem?.status==="accepted"}  className=" w-[25%] flex pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#a12e0edb] px-4 py-2 text-white font-medium rounded-lg">
                      Failed
                    </button>
                    <button disabled={!payment.dataMahrem || payment.dataMahrem?.status==="rejected"}  className="w-[25%] flex  pointer-events-none disabled:bg-slate-400 justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
                      Success
                    </button>
                  </div>
          </div>
            </>}
          {payment?.gender==="female"&&(!payment.data || !payment.dataMahrem)&&
                  <h1 className="text-center text-xl font-medium mt-4 text-red-600">Both must be accepeted so you can move to the next step</h1>
                }
      </div>
      <div>
        <Image
        className="rounded-lg"
          src={"/image/bank.png"}
          width={1700}
          height={800}
          alt="Bankimage"
        />
      </div>
    </div>
  )
}

export default Payment;