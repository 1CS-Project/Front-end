import TirageReg from "@/components/TirageReg/TirageReg";
import { pick } from "lodash";
import { NextIntlClientProvider, useMessages } from "next-intl";

function Page() {
  const messages = useMessages();

    return (
        <div className="px-10 py-10">
          <NextIntlClientProvider messages={pick(messages,"tirageForm")}>
            <TirageReg/>
          </NextIntlClientProvider>

        </div> 
     );
}

export default Page;