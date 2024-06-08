
export async function chooseVol(token:string,reserv:Record<string,string>){
    try {
        
        const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/api/ChoisirVolClient`,{
            method:"POST",
            body:JSON.stringify(reserv),
            headers:{
                "Authorization":`Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        if (res.ok){
            const code=(await res.json()).code;
            console.log(code);
            
            return {added:true,code}
        }
        throw Error("Please try again later")
    } catch (error) {
        throw Error("Something went wrong")
    }   
}
