// layout.tsx
import Header from "@/components/landing/common/header";
import { NextIntlClientProvider } from "next-intl";
import {NextUIProvider} from "@nextui-org/react";
import Footer from "@/components/landing/common/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
<NextIntlClientProvider messages={{}}>
      <div>
        <Header />
        {children}
        <Footer/>
      </div>
    </NextIntlClientProvider>
    
  );
}

export default Layout;
