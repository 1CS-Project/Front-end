import Landing from '@/components/landing/afterRegistration/landing';
import {useTranslations} from 'next-intl';


export default function Home() {
  const t = useTranslations('home');
  return (
    <div>
      <h1>
        {/* {t("hello")} */}
        <Landing/>
      </h1>
    </div>
  );
}
