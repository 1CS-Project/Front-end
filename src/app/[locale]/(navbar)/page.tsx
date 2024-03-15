import Condition from '@/components/landing/BeforeRegistration/Conditions/condition';
import Faq from '@/components/landing/BeforeRegistration/FAQS/faq';
import ContactUs from '@/components/landing/BeforeRegistration/contactus/contactsUs';
import Hero from '@/components/landing/BeforeRegistration/hero/hero';
import Journey from '@/components/landing/BeforeRegistration/journey/journey';
import {useTranslations} from 'next-intl';


export default function Home() {
  const t = useTranslations('home');
  return (
    <main>
        <Hero />
        <div className='px-20'>
          <Condition/>
          <Journey/>
          <Faq/>
          <ContactUs/>
        </div>
    </main>
  );
}
