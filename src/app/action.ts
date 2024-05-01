'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function handleLogin(Email:string,Password:string) {
    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/Sign_In`,{
            body:JSON.stringify({Email,Password}),
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
                }
        })
        
        if (res.ok){
            let {accessToken}=await res.json()

            cookies().set("jwt",accessToken,{
                httpOnly:true,
                // secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 ,
                path: '/',
            })
            
            return {loggedIn:true}
            
        }else{
            return {loggedIn:false,error:"Incorrect Email or password"}
        }
    } catch (error) {
        console.log(error);
        
        return {loggedIn:false,error:"Please try again later"};
        
        
    }
}

export async function getToken(){
    const token=cookies().get("jwt")?.value;    

    return token;
}

export async function getMinUser():Promise<Record<string,string>|undefined>{
    const token=cookies().get("jwt")?.value;    
    
    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getMinUser`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        if (!re.ok){
            return undefined;
        }
        let user=await re.json()
        return user;

    } catch (error) {
        return undefined;
    }
}

export async function getUser():Promise<Record<string,string>|undefined>{
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getUser`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        if (!re.ok){
            return undefined;
        }
        let user=await re.json()
        return user;

    } catch (error) {
        return undefined;
    }
}



export async function logOut(){    
    
    cookies().delete("jwt")
    redirect("/")
}


export async function getTirageRegData(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/user-registration`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        if (!re.ok){
            return undefined;
        }
        let data=await re.json()
        return data;

    } catch (error) {
        return undefined;
    }
}