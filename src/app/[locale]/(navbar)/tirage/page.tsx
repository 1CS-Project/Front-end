import { getTirageRegData, getToken } from "@/app/action";
import TirageReg from "@/components/TirageReg/TirageReg";
import TirageRegDone from "@/components/TirageReg/TirageRegDone(mustChangeLater)";
import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";

async function Page() {
  const messages =await getMessages();
  const token=await getToken();    
  const tirageData=await getTirageRegData();

    return (
        <div className="px-10 py-10">
          {!tirageData&&
            <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
              <TirageReg token={token!}/>
            </NextIntlClientProvider>
          }
          {
            tirageData&&
              <TirageRegDone/>
          }


        </div> 
     );
}

export default Page;