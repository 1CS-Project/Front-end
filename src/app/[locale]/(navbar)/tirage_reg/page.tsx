import { getTimer, getTirageRegData, getToken } from "@/app/action";
import TirageReg from "@/components/TirageReg/TirageReg";
import TirageRegDone from "@/components/TirageReg/TirageRegDone(mustChangeLater)";
import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

async function Page() {
  const messages =await getMessages();
  const token=await getToken();    
  const tirageData=await getTirageRegData();
  
  const hadjRegStart=(await getTimer()).startDate;
  const isHadjRegStarted=hadjRegStart?new Date()>hadjRegStart:false;

    return (
        <div className="px-10 py-10">
          {!tirageData?isHadjRegStarted?
            <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
              <TirageReg token={token!}/>
            </NextIntlClientProvider>
          :<>
        <div className="flex mt-20 justify-center items-center">
            <div className="w-[600px] flex flex-col items-center gap-y-3"> 
                <Image src={"/image/hourglass.png"} alt="Hour glass" width={140} height={500}/>
                <h1 className="text-lg font-medium">Hadj Registration not yet started</h1>
                <Link href="."
                 className="mt-4 w-full py-2 rounded-lg text-white text-center font-medium bg-gradient-to-r from-buttonleft to-buttonright " >Return to main menu</Link>
            </div>
        </div>          </>
          :
              <TirageRegDone/>
          }
        </div> 
     );
}

export default Page;