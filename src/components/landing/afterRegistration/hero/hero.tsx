import Hilal from "../../common/icons/hilal";
import Stars from "../../common/icons/stars";
import Timer from "../../common/timer";
import Calendar from "./calendar";

function Hero() {
    return ( 
        <div className="mt-12">
            <div className=" relative h-[300px]">
                <div className="w-full z-0 h-full absolute">
                    <Stars/>
                </div>
                <div className="flex h-full  justify-center  items-center">
                    <div className="  relative  h-fit w-fit ">
                        <div className="isolate flex items-center relative justify-center">
                            <div className="relative  -z-0 ">
                                <Hilal />
                            </div>
                            <h1 className="absolute text-[70px] sm:text-[90px] md:text-[100px]  mix-blend-overlay select-none leading-none">Welcome</h1>
                        </div>
                    </div>
                </div>
            </div>   
            <Calendar/>
            <div className="mt-6 flex items-center justify-center gap-x-10">
                <h1 className="text-lg">Still</h1>
                <Timer darkMode/>
                <h1 className="text-lg">To the registration</h1>
            </div>

        </div>
     );
}

export default Hero;