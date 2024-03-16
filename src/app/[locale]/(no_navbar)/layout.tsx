// layout.tsx
import Header from "@/components/landing/common/header";
import { NextIntlClientProvider } from "next-intl";
import {NextUIProvider} from "@nextui-org/react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div>
        {children}
      </div>
    
  );
}

export default Layout;
