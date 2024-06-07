import Image from "next/image"

function payment() {
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
        <div className="mt-4 flex gap-4 justify-center items-center">
          <button type="submit" className=" w-[25%] flex justify-center items-center gap-1 bg-gray-300 px-4 py-2 text-white font-medium rounded-lg">
          Not-paid
          </button>
          <button type="submit" className="w-[25%] flex justify-center items-center gap-1 bg-[#13A10E] px-4 py-2 text-white font-medium rounded-lg">
          Paid
          </button>
        </div>
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

export default payment