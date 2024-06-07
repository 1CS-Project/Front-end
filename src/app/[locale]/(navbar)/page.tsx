
import Condition from '@/components/landing/BeforeRegistration/Conditions/condition';
import Faq from '@/components/landing/BeforeRegistration/FAQS/faq';
import ContactUs from '@/components/landing/BeforeRegistration/contactus/contactsUs';
import Hero from '@/components/landing/BeforeRegistration/hero/hero';
import Steps from '@/components/landing/BeforeRegistration/steps/steps';
import { NextIntlClientProvider } from 'next-intl';
import {pick} from "lodash";
import { getToken, getMinUser, getTimer } from '@/app/action';
import { getMessages } from 'next-intl/server';
import Landing from '@/components/landing/afterRegistration/landing';
 
export default async function Home() {
    const messages = await getMessages();
    const user=await getMinUser();
    const dates=await getTimer();
    
  return (
    <main>
      {user?<Landing/>:
          <>
              <NextIntlClientProvider messages={messages}>
            <Hero startDate={dates.startDate} endDate={dates.endDate} hadjStart={dates.hadjStart}/>
            <div className='px-20'>
              <Condition/>
                <Steps/>
              <Faq/>
              <ContactUs/>
            </div>
              </NextIntlClientProvider>
          </>
  }
    </main>
  );
}
