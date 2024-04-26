import { getToken } from "@/app/action";
import TirageReg from "@/components/TirageReg/TirageReg";
import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { getMessages } from "next-intl/server";

async function Page() {
  const messages =await getMessages();
  const token=await getToken();    

    return (
        <div className="px-10 py-10">
          <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
            <TirageReg token={token!}/>
          </NextIntlClientProvider>

        </div> 
     );
}

export default Page;