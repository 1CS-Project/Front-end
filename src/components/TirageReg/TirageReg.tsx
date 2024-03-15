import { Abril_Fatface,Open_Sans } from "next/font/google";

const Abril=Abril_Fatface({subsets:["latin"],weight:["400"]})

const open_sans=Open_Sans({weight:"variable",subsets:["latin"]})


function TirageReg() {
    return ( 
        <div>
            <h1 className="px-10 flex items-center gap-x-4">
                <span className={Abril.className+" text-7xl px-5 border-b border-black pb-2"}>01</span>
                <span className={open_sans.className+" text-4xl font-medium"}>Register</span>
            </h1>
        </div>
     );
}

export default TirageReg;