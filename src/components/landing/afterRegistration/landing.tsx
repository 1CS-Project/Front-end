import Header from "../common/header";
import Body from "./body/body";
import Footer from "./footer/footer";
import Hero from "./hero/hero";

function Landing() {
    return ( 
            <div className="px-10 mt-20">
                <Hero/>
                <Body/>
            </div>
     );
}

export default Landing;