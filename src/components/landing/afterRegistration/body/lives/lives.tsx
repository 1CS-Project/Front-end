function Lives() {
    return ( 
        <div className="my-20 ">
            <h1 className="text-2xl font-medium ">See Mecca Live</h1>
            <div className="border-b border-black mt-2 mb-8 mr-28"/>
            <div className="p-4 flex justify-center ">
            <iframe className="outline-none" style={{border:"0"}} width="560" height="315" src="https://www.youtube.com/watch?v=moQtMet7F7w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
     );
}

export default Lives;