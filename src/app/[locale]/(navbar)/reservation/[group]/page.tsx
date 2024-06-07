import { getClientVol, getGroupData, getToken } from "@/app/action";
import JoinGroup from "@/components/landing/afterRegistration/reservation/joinGroup";
import { redirect } from "next/navigation";

async function Page({params}:{params:{group:string}}) {

    const token=await getToken();
    const group=await getGroupData(params.group);

    const volData=await getClientVol();

    if (volData){
        redirect("./")
    }
    if (!group){
        return (
            <div>
                Group not found 
            </div>
        )
    }
    return ( 
        <JoinGroup token={token!} group={group}/>
     );
}

export default Page;