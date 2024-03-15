import Header from "../common/header";
import Body from "./body/body";
import Footer from "./footer/footer";
import Hero from "./hero/hero";

function Landing() {
    return ( 
        <div className="">
            <div className="px-10">
                <Hero/>
                <Body/>
            </div>
            <Footer/>
        </div>
     );
}

export default Landing;