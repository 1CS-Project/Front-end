import Link from "next/link";

function Header() {
    return ( 
        <div className="flex">
            <div>
                Logo
            </div>
            <div>
                <Link  href={"/journey"}>
                    <h1>
                        Journey
                    </h1>
                </Link>
                
            </div>            

        </div>
     );
}

export default Header;