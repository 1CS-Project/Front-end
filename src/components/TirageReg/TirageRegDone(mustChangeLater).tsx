import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

function TirageRegDone() {
    const locale = useLocale();

    return ( 
        <div className="flex mt-20 justify-center items-center">
            <div className="w-[600px] flex flex-col items-center gap-y-3"> 
                <Image src={"/image/hourglass.png"} alt="Hour glass" width={140} height={500}/>
                <h1 className="text-lg font-medium">Hajj Selection: Pathway to Sacred Pilgrimage</h1>
                <h3 className="text-center">Discover your destiny: the results of the Hajj draw will be revealed soon. Stay tuned to see if you're chosen for this sacred journey.</h3>
                <Link href={"/" + locale}
                 className="mt-4 w-full py-2 rounded-lg text-white text-center font-medium bg-gradient-to-r from-buttonleft to-buttonright " >Return to main menu</Link>
            </div>
        </div>
     );
}

export default TirageRegDone;