// layout.tsx
import Header from "@/components/landing/common/header";
import {  NextIntlClientProvider, useTranslations } from "next-intl";
import Footer from "@/components/landing/common/footer";
import { getMessages, getTranslations } from "next-intl/server";
import { getMinUser } from "@/app/action";
import { pick } from "lodash";

async function Layout({ children }: { children: React.ReactNode }) {
  const t = await getTranslations('home');
  const messages = await getMessages();
  const user=await getMinUser();

  // const translations={
  //   journey:t("journey"),
  //   steps:t("Steps"),
  //   conditions:t("Conditions"),
  //   tirage:t("Tirage"),
  //   hotel:t("Hotel")
  // }
  
  return (
      <div className="flex flex-col h-screen w-full">
      <NextIntlClientProvider messages={pick(messages,"home")}>
        <Header user={user?.name as string}/>
      </NextIntlClientProvider>
        {children}
        <div className="flex-1"></div>
        <Footer/>
      </div>
    
  );
}

export default Layout;
