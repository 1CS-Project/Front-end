
import Condition from '@/components/landing/BeforeRegistration/Conditions/condition';
import Faq from '@/components/landing/BeforeRegistration/FAQS/faq';
import ContactUs from '@/components/landing/BeforeRegistration/contactus/contactsUs';
import Hero from '@/components/landing/BeforeRegistration/hero/hero';
import Journey from '@/components/landing/BeforeRegistration/journey/journey';
import { NextIntlClientProvider } from 'next-intl';
import {pick} from "lodash";
import { getSession } from '@/app/action';
import { getMessages } from 'next-intl/server';
import Landing from '@/components/landing/afterRegistration/landing';
 
export default async function Home() {
    const messages = await getMessages();
    const session=await getSession();
    console.log(session);
    
    
  return (
    <main>
      {session?<Landing/>:
          <>
            <Hero />
            <div className='px-20'>
              <Condition/>
              <NextIntlClientProvider messages={pick(messages,"journey")}>
                <Journey/>
              </NextIntlClientProvider>
              <Faq/>
              <ContactUs/>
            </div>
          </>
  }
    </main>
  );
}
