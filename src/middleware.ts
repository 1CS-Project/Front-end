import { NextRequest, NextResponse } from "next/server";
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

    if (req.nextUrl.pathname==="/"){
      return NextResponse.redirect(new URL("/"+defaultLocale,req.url))
    }
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
      
      if ((pathname.startsWith("/profil")||pathname.startsWith("/tirage_reg"))&&!payload){      
        return NextResponse.redirect(new URL("/"+locale+"/signup",req.url))
      }   
      
      if (payload){
        if (!payload.verified&&!pathname.startsWith("/confirmation")){
          return NextResponse.redirect(new URL("/"+locale+"/confirmation",req.url))
        }

        if ((pathname.startsWith("/signup")||pathname.startsWith("/confirmation"))&&payload.verified){      
          return NextResponse.redirect(new URL("/"+locale,req.url))
        }

      }


    }
    else if (payload&&!payload.verified){
      return NextResponse.redirect(new URL("/"+locale+"/confirmation",req.url))

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