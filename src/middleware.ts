
import { verifyToken } from "@/utils/auth";
import { NextRequest } from "next/server";
import createMiddleware from 'next-intl/middleware';
import { getMinUser } from "./app/action";
 
const defaultLocale='en'


const handleI18nRouting = createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'ar','fr'],
 
  // Used when no locale matches
  defaultLocale: defaultLocale
});
 
let landings =["/en","/ar","/fr"]

export async function middleware(req:NextRequest){
    const response = handleI18nRouting(req);

    let payload=await getMinUser()

    if (payload&&Object.keys(payload).length===0){
      payload=undefined;
  }
    // console.log(req.nextUrl);
    let l=req.nextUrl.pathname.split("/");
    let locale=defaultLocale
    if (l.length>=1){
      locale=l[1]
    }    
    
    
    if (!landings.includes(req.nextUrl.pathname)){
      let pathname=req.nextUrl.pathname.slice(3);
      // console.log(pathname);
      
      if (pathname.startsWith("/en/signup")&&payload){      
        return Response.redirect(new URL("/"+locale,req.url))
      }
      if ((pathname.startsWith("/profil")||pathname.startsWith("/tirage_reg"))&&!payload){      
        return Response.redirect(new URL("/"+locale+"/signup",req.url))
      }   
    }
  
    return response;
}


// export const config ={
//     matcher: ["/:path/signup"]
// }

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|fr)/:path*']
};