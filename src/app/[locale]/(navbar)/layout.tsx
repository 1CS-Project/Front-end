// layout.tsx
import Header from "@/components/landing/common/header";
import {  NextIntlClientProvider, useTranslations } from "next-intl";
import Footer from "@/components/landing/common/footer";
import { getMessages, getTranslations } from "next-intl/server";
import { getSession } from "@/app/action";
import { pick } from "lodash";

async function Layout({ children }: { children: React.ReactNode }) {
  const t = await getTranslations('home');
  const messages = await getMessages();
  const session=await getSession();

  // const translations={
  //   journey:t("journey"),
  //   steps:t("Steps"),
  //   conditions:t("Conditions"),
  //   tirage:t("Tirage"),
  //   hotel:t("Hotel")
  // }
  
  return (
      <div>
      <NextIntlClientProvider messages={pick(messages,"home")}>
        <Header user={session?.name as string}/>
      </NextIntlClientProvider>
        {children}
        <Footer/>
      </div>
    
  );
}

export default Layout;
