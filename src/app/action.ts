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


type TirageDataT={
        nationalIdNumber: string,
        registrationYear: number,
        firstname: string,
        lastname: string,
        phoneNumber: string,
        birthCerteficateNumber: string,
        city: string,
        state: string,
        passportExpirationDate: string,
        dateOfBirth: string,
        gender: string,
        imageUrl: string,
        PassportNumber:string,
        mahremId: string,
        mahremRelation?: string,
        userId: string,
        uncount?: boolean
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
        return data as {data:TirageDataT};

    } catch (error) {
        return undefined;
    }
}

////////////////////////////////////////////////////////////////////////////

type timer={
    startDate:string,
    endDate:string,
    hadjStart:string
}

export async function getTimer(){       

    try {
        let res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/timer/get-timer`);
        
        if (res.ok){
            let data=await res.json() as timer;
            return {
                startDate:new Date(data.startDate),
                endDate:new Date(data.endDate),
                hadjStart:new Date(data.hadjStart)
            };  
        }else {
            console.log(await res.json());
            
            throw Error("Something went wrong")
        }
        
    } catch (error) {
        
        throw Error("Please try again later")
    }
}



// export async function checkUserWin(){
//     const token=cookies().get("jwt")?.value;    

//     try {
//         let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/user-registration`,{
//             headers:{
//                 "Authorization":`Bearer ${token}`   
//             }
//         })
//         if (!re.ok){
//             return undefined;
//         }
//         let data=await re.json()
//         return data.data as {data:TirageDataT};

//     } catch (error) {
//         return undefined;
//     }
// }


export async function baladiaDidTirage(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/baladiaDidTirage`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        if (!re.ok){
            return undefined;
        }
        let data=await re.json()
        return data as {data:Record<string,any>};

    } catch (error) {
        return undefined;
    }
}
type UserWinned={
    nationalIdNumber: string,
    date_of_winner: string,
    baladia: string
}


export async function isUserWinned(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/tirage/user-win`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })

        if (!re.ok){
            return undefined;
        }

        let data=await re.json()
        return data.data as UserWinned;

    } catch (error) {
        return undefined;
    }
}

type Hospital={
    id:string,
    Wilaya:string 
    nameCenter:string,
    emailCenter:string,
    dateDebut:string,
    dateFin:string,
    BaladiaLocation:string,
    
}
export async function getBaladiaCentres(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/examination/baladiaCentres`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })

        if (!re.ok){
            return undefined;
        }

        let data=await re.json()
        return data.data as Hospital[];

    } catch (error) {
        return undefined;
    }
}



type examination={
    status:"accepted"|"rejected",
    note?:string
}

export async function getCandidatExaminationStatus(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/examination/clientExaminateStatus`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })

        if (!re.ok){
            return undefined;
        }

        let d=await re.json()
        const gender=d.gender as "male"|"female"
        const data=d.data as examination|undefined;
        const dataMahrem=d.dataMahrem as examination|undefined
        
        return {gender,data,dataMahrem};

    } catch (error) {
        return undefined;
    }
}


type paymentStatus={
    status:"accepted"|"rejected",
}

export async function getCandidatPaymentStatus(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/dashboard/getClientPaymentStatus`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })

        if (!re.ok){
            return undefined;
        }

        let d=await re.json()
        const gender=d.gender as "male"|"female"
        const data=d.data as examination|undefined;
        const dataMahrem=d.dataMahrem as examination|undefined
        
        return {gender,data,dataMahrem};

    } catch (error) {
        return undefined;
    }
}

export type Flight={

    id:number,
    AireportLocatoin:string,
    wilayaSelect: string,
    VolStart: string,
    VolEnd: string,
    PlaceOfVol: string,
    DirectionVol: string,
    ListHotel: string,
    ListAvailibleRoom: string,
    ListMaxPosOfRoom: string
}


export async function getVols(){
    const token=cookies().get("jwt")?.value;    

    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/AficheVolPourClientBaladya`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })

        if (!re.ok){
            return undefined;
        }

        let data=await re.json()
        
        return data.data as Flight[];

    } catch (error) {
        return undefined;
    }
}


export type ClientFlight={
    id: string,
    aireport: string,
    volStart: string,
    volEnd: string,
    hotel: string,
    nationalId: string,
    code: string
}


export async function getClientVol(){
    const token=cookies().get("jwt")?.value;    
    
    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getVolClient`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        
        if (!re.ok){
            return undefined;
        }

        let data=await re.json()

        console.log(data);
        
        
        return data as ClientFlight|undefined;

    } catch (error) {
        return undefined;
    }
}



export async function getGroupData(code:string){
    const token=cookies().get("jwt")?.value;    
    
    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getGroupData/${code}`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        
        if (!re.ok){
            return undefined;
        }

        let data=await re.json()        
        
        return data as ClientFlight|undefined;

    } catch (error) {
        return undefined;
    }
}

type bank={
    id:string
    BanqueName: string,
    dateDebut: string,
    dateFin: string,
    // BaladiaLocation: string
}

export async function getBaladyaBanks(){
    
    const token=cookies().get("jwt")?.value;    
    
    try {
        let re=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/getBaladyaBanks`,{
            headers:{
                "Authorization":`Bearer ${token}`   
            }
        })
        
        if (!re.ok){
            return undefined;
        }

        let data=await re.json() 
        
        console.log(data);
        
        return data.data as bank[]|undefined;

    } catch (error) {
        return undefined;
    }
}