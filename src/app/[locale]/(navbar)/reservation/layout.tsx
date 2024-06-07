import Image from "next/image";

async function Layout({ children }: { children: React.ReactNode }) {
    return ( 
        <div className="px-36 mt-20 ">
            <div className="h-fit text-center">
                <h1 className="py-1 text-lg font-medium ">Join group</h1>
                <input className="h-10 rounded-l-xl" type="text" name="" id="" />
                <button className="text-white font-medium bg-gradient-to-r from-buttonleft to-buttonright  h-10 px-2 rounded-r-full">Join</button>
            </div>
            <h1 className="text-center py-10 text-xl font-medium">OR</h1>
            <div className=" flex justify-between">
                <div>
                    {children}
                </div>
                <div>
                    <Image src="/image/plane.png" alt="plane" width={300} height={600}/>
                </div>
            </div>
        </div>
     );
}

export default Layout;