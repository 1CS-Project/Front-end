import Articles from "./articles/articles";
import Lives from "./lives/lives";

function Body() {
    return ( 
        <div className="mt-12 px-5">
            <Articles/>
            <Lives/>
        </div>
     );
}

export default Body;