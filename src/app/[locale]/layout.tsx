import Header from "@/components/landing/common/header";

function Layout({children}: {children: React.ReactNode}) {
    return ( 
        <div className="px-10 pt-5">
            <Header/>
            {children}
        </div>
     );
}

export default Layout;