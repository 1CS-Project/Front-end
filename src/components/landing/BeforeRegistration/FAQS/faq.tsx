import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



function faq() {
  return (
    <section className="mt-[4rem] ">

      <h1 className="text-center font-semibold text-3xl mb-[4rem]">Frequently asked questions </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who is eligible to perform Hadj ?</AccordionTrigger>
          <AccordionContent>
            Hajj is the annual Islamic pilgrimage to Mecca, which is a religious obligation for Muslims who are physically and financially capable of undertaking the journey. It holds immense significance as one of the Five Pillars of Islam, representing a profound spiritual journey and an opportunity for purification and renewal.        </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it necessary to make a reservation to perform prayers and visit the tomb of the Prophet, peace and blessings be upon him?</AccordionTrigger>
          <AccordionContent>
            Reservations are not required for this, as visiting the tomb of the Prophet, peace and blessings be upon him, is only permitted for men.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is there a fine if the visa duration expires and the person is still present in the Kingdom? How much is the fine?</AccordionTrigger>
          <AccordionContent>
            Imposing fines and penalties on those who delay leaving the Kingdom of Saudi Arabia upon the visa expiration does not fall under the jurisdiction of the Ministry of Hajj and Umrah.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Are there any guides during the various stages of performing hajj?</AccordionTrigger>
          <AccordionContent>
            Yes , there will be 104 religious guides accompanying the pilgrims during all stages of performing these rituals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Does registering on the platform and participating in the lottery imply acceptance for Hajj?</AccordionTrigger>
          <AccordionContent>
            ....
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>What steps should I take after completing my registration?</AccordionTrigger>
          <AccordionContent>
            ...
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default faq