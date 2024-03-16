// layout.tsx
import Header from "@/components/landing/common/header";
import {  useTranslations } from "next-intl";
import Footer from "@/components/landing/common/footer";

function Layout({ children }: { children: React.ReactNode }) {
  const t = useTranslations('home');
  const translations={
    journey:t("journey"),
    steps:t("Steps"),
    conditions:t("Conditions"),
    tirage:t("Tirage"),
    hotel:t("Hotel")
  }

  return (
      <div>
        <Header {...translations}/>
        {children}
        <Footer/>
      </div>
    
  );
}

export default Layout;
