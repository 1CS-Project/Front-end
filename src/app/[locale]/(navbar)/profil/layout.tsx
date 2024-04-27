import { getUser } from "@/app/action";
import ProfilSideBar from "@/components/landing/afterRegistration/profil/profilSideBar";

async function Layout({ children }: { children: React.ReactNode }) {
    let data=await getUser()

    return (
    <div className="w-full grid grid-cols-3 gap-4 mx-auto items-center justify-between mt-12">
        <ProfilSideBar/>
        <div className="mt-12 col-span-2">
            <div className="max-w-lg ">
                <div className="bg-red-500 rounded-full m-auto  w-[60px] h-[60px] flex items-center justify-center text-white">
                {data?.name.charAt(0)}
                </div>
            </div>
            {children}
        </div>
    </div>
    )
}

export default Layout;

