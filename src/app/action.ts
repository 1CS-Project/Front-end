'use server'
import { verifyToken } from '@/utils/auth'
import { cookies } from 'next/headers'


export async function handleLogin(Email:string,Password:string) {

    try {
        let res=await fetch("http://localhost:3001/api/Sign_In",{
            body:JSON.stringify({Email,Password}),
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                }
        })
        // console.log(res.ok);
        
        if (res.ok){
            let {accessToken,refreshToken}=await res.json()
            // console.log(refreshToken);
            cookies().set("jwt",refreshToken,{
                httpOnly:true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 ,
                path: '/',
            })
            
            // return {accessToken};
            return {logedIn:true}
            
        }else{
            console.log(await res.json());
            
        }
    } catch (error) {
        throw error;
        
    }

}

export async function getSession(){
    const token=cookies().get("jwt")?.value;    
    let payload=(token&&token.length>0)?(await verifyToken(token)):undefined;
    if (payload&&Object.keys(payload).length===0){
        payload=undefined;
    }
    // console.log(payload);
    
    return payload;
    // return "";
}