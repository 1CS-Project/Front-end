import Cat404 from "@/components/landing/common/icons/cat404";
import Link from "next/link";

function NotFound() {
    return ( 
        <div className="flex justify-center items-center w-full h-full">
            <div>
                <Cat404 className="w-[1000px] h-[500px] mr-[70px]"/>
                <div className="text-center relative bottom-20 space-y-8">
                    <h1 className="text-[#333333]  text-4xl   font-medium">Oops! Page not found</h1>
                    <div className="">
                        <Link className="text-[#333333]  text-2xl w-fit border border-[#333333] px-2 py-2 rounded-md  font-medium" href={"/"}>Return to Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default NotFound;