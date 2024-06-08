import Body from "./body/body";
import Hero from "./hero/hero";

type props={
    startDate:Date
}


async function Landing() {

    
    return ( 
            <div className="px-10 mt-20">
                <Hero/>
                <Body/>
            </div>
     );
}

export default Landing;