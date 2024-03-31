import * as jose from 'jose'


export const verifyToken=async (token:string)=>{
    const secret = new TextEncoder().encode(
        process.env.Refresh_Token_Secret,
      )
    try {
        const {payload}=await jose.jwtVerify(token,secret)
        return {userId:payload.userId,name:payload.name}
        
    } catch (error) {
        console.log(error);
        
    }
}