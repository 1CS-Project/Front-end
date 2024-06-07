"use client"

import { usePathname } from "next/navigation";


type props={
    locale:string
}

function Or({locale}:props) {
    
    const pathname = usePathname()
    if (pathname==="/"+locale+"/reservation"){
        return ( 
            <h1 className="text-center py-10 text-xl font-medium">OR</h1>
    
         );
    }
    return (
        <div className="my-10">

        </div>
    );
}

export default Or;