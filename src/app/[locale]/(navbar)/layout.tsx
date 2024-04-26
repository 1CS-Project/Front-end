// layout.tsx
import Header from "@/components/landing/common/header";
import {  NextIntlClientProvider, useTranslations } from "next-intl";
import Footer from "@/components/landing/common/footer";
import { getMessages, getTranslations } from "next-intl/server";
import { getUser } from "@/app/action";
import { pick } from "lodash";

async function Layout({ children }: { children: React.ReactNode }) {
  const t = await getTranslations('home');
  const messages = await getMessages();
  const user=await getUser();

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
        <Header user={user?.name as string}/>
      </NextIntlClientProvider>
        {children}
        <Footer/>
      </div>
    
  );
}

export default Layout;
