import { getClientVol } from "@/app/action";
import Or from "@/components/landing/afterRegistration/reservation/Or";
import ReservationHeader from "@/components/landing/afterRegistration/reservation/reservationHeader";
import { useLocale } from "next-intl";
import Image from "next/image";

async function Layout({ children }: { children: React.ReactNode }) {
    const volData=await getClientVol();
    const locale =useLocale();
    return ( 
        <div className="px-36 mt-20 ">
           {!volData&&<>
            <ReservationHeader/>
            <Or locale={locale}/>
           </>}
            <div className={" flex justify-between "+(volData?"pt-10":"")}>
                <div className={volData&&"w-full"}>
                    {children}
                </div>
                <div className="min-w-[300px]">
                    <Image src="/image/plane.png" alt="plane" width={300} height={600}/>
                </div>
            </div>
        </div>
     );
}

export default Layout;