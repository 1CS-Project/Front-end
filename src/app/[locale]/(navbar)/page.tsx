import Condition from '@/components/landing/BeforeRegistration/Conditions/condition';
import Faq from '@/components/landing/BeforeRegistration/FAQS/faq';
import ContactUs from '@/components/landing/BeforeRegistration/contactus/contactsUs';
import Hero from '@/components/landing/BeforeRegistration/hero/hero';
import Journey from '@/components/landing/BeforeRegistration/journey/journey';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import {pick} from "lodash";

export default function Home() {
  const messages = useMessages();
  
  return (
    <main>
        <Hero />
        <div className='px-20'>
          <Condition/>
          <NextIntlClientProvider messages={pick(messages,"journey")}>
            <Journey/>
          </NextIntlClientProvider>
          <Faq/>
          <ContactUs/>
        </div>
    </main>
  );
}
