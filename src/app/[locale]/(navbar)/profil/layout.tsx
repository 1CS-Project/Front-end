import { getUser } from "@/app/action";
import ProfilSideBar from "@/components/landing/afterRegistration/profil/profilSideBar";

async function Layout({ children }: { children: React.ReactNode }) {
    let data=await getUser()

    return (
    <div className="w-full gap-x-36 flex mx-auto  mt-12">

        <ProfilSideBar/>
        <div className="py-10 w-full">
            {children}
        </div>
    </div>
    )
}

export default Layout;

