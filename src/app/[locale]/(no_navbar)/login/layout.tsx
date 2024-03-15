import Header from "@/components/landing/common/header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"],weight:"variable" });



function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <div className={" pt-5 w-screen h-screen overflow-x-hidden "+inter.className}>
            {children}
        </div>
     );
}

export default Layout;