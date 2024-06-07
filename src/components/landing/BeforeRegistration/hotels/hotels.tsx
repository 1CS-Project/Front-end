import { useLocale } from "next-intl"
import Link from "next/link"

function hotels() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale()

  return (
    <div className="mt-24 mx-10 h-full">
      <h1 className="text-center font-semibold text-xl mb-4"> The regulatory procedures and administrative documents for pilgrims for the Hajj
      </h1>
      <hr />

      <main className="mt-6">

        <section id="step-1">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">Step 1:</span> Sign up on the platform:</p>
          <p className="text-md"> Go to the <Link href={"/" + locale + "/signup"} className="text-blue-500 underline">Sign-Up Page</Link>. Fill in the required details to create your account. Verify your email address by clicking on the verification link sent to your email.</p>
        </section>

        <section id="step-2">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Step 2:</span> Register for Hajj:</p>
          <p className="text-md"> - Log in to your account. Navigate to the Hajj registration section. Ensure you meet the necessary conditions for registration, which can be found on our <Link href={"/" +locale+ "#conditions-section"} className="text-blue-500 underline">Landing Page</Link>. <br />- Complete the Hajj registration form with accurate details. Submit your registration.</p>
        </section>

        <section id="step-3">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Step 3:</span>  Wait for the Lottery Draw:</p>
          <p className="text-md">- After submitting your registration, you will enter a lottery draw. Wait for the results of the draw. You will be notified via email if you are selected.</p>
          <p className="text-md">- If you are not selected in the draw, you will need to reapply next year. Keep an eye on the registration dates for the next year.</p>
        </section>



        <section id="step-4">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Step 4:</span>  If Selected - Medical Examination:</p>
          <p className="text-md">If you are selected, you will move on to the next step. Visit a designated hospital for a medical examination. The doctor will assess your health and determine if you are fit for the pilgrimage. Wait for the decision from the doctor. If approved, you will proceed to the next step. If not, you will need to reapply next year.</p>
        </section>


        <section id="step-5">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Step 5:</span>  Payment of Hajj Tariff:</p>
          <p className="text-md">If your medical examination is approved: <br />
            1- Receiving the Certificate of Success from the Municipal or District Authorities <br className="mb-2" />
            2- Then you need to go to a designated bank to pay the Hajj tariff. (Make sure to keep the Certificate as proof of your success).</p>
        </section>

        <section id="step-6">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Step 6:</span>  Flight and Room Reservations:</p>
          <p className="text-md">After your payment is confirmed, you can proceed to book your flight and room: <br />
            1- Select your preferred flight from your nearest wilaya (province) for yourself and any accompanying friends.
            <br /> 2- Choose your accommodation and make the necessary reservations. <br />
          3- Submit the reservation details and wait for confirmation of acceptance from your friends</p>
        </section>



        <section id="step-7">
          <p className="my-2 font-semibold text-xl">
            <span className="font-semibold underline text-xl">  Journey Information: </span>  </p>
          <p className="text-md">Before you embark on your journey, visit our <Link  href={"/" + locale + "/journey"} className="text-blue-500 underline">Journey Page</Link> to find all the essential information you need to know about performing Hajj. This page includes details on travel, rituals, accommodations, and other important guidelines to ensure a smooth and spiritually fulfilling pilgrimage.</p>
        </section>
      </main>
    </div>
  )
}

export default hotels