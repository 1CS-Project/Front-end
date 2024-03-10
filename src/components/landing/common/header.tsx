import Link from "next/link";

function Header() {
    return ( 
        <div className="flex justify-between">
            <div>
                Logo
            </div>
            <div className="flex gap-x-6">
                <Link  href={"/journey"}>
                    <h1>
                        Journey
                    </h1>
                </Link>
                <Link  href={"/steps"}>
                    <h1>
                        Steps
                    </h1>
                </Link>
                <Link  href={"/conditions"}>
                    <h1>
                        Conditions
                    </h1>
                </Link>
                <Link  href={"/tirage"}>
                    <h1>
                        Tirage
                    </h1>
                </Link>
                <Link  href={"/hotel"}>
                    <h1>
                        Hotel
                    </h1>
                </Link>
            </div>            
            <div>
                English
            </div>
        </div>
     );
}

export default Header;