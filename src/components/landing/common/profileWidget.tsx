import { logOut } from "@/app/action";
import { IconChevronDown } from "@tabler/icons-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


type props={
  user:string
}

function ProfileWidget({user}:props) {
    const [open,setOpen]=useState(false)
    const locale = useLocale();

    return ( 
    <div 
     className="relative cursor-pointer  flex justify-center items-center px-1 gap-1"  onClick={()=>setOpen(!open)}>
        {/* <Image
          src="/image/hadjdef.png"
          height={100}
          width={100}
          alt="Profil Image"
          className="rounded-full aspect-square object-cover w-[40px] h-[40px]"
        /> */}
        <div className="bg-red-500 rounded-full  w-[30px] h-[30px] flex items-center justify-center text-white">
          {user.charAt(0)}
        </div>
        <IconChevronDown stroke={2} />

        
      {open&&(
        <div className="absolute top-16  shadow-lg">
        <ul className="bg-white w-40 -left-24  text-black text-center p-1 rounded-lg">

          <Link href={"/" + locale + "/profil"}>
            <li className="p-2 text-lg cursor-pointer hover:bg-gray-100" >
              Profil
              </li>
          </Link>
            <li className="p-2 text-lg cursor-pointer hover:bg-gray-100" >
            Saved
            </li>
          <hr color="black"/>
          <li onClick={async ()=>{
            await logOut()
          }} className="text-red-500 p-2 text-lg cursor-pointer hover:bg-gray-100">
            Log out
          </li>
        </ul>
    </div>
      )}
    
    </div>
     );
}

export default ProfileWidget;