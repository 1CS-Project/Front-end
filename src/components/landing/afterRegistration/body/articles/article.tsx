import Bookmark from "@/components/landing/common/icons/bookmark";
import Image from "next/image";
import Link from "next/link";

type props={
    image:string,
    title:string,
    body:string,
    author:string,
    length:string,
    url:string
}



function Article({image,author,body,length,title,url}:props) {
    return ( 
        <div className="rounded-md overflow-hidden max-w-[350px]">
            <Image alt="" src={image} width={400} height={200}/>
            <h1 className="my-3 font-medium text-xl">{title}</h1>
            <p className="text-sm">{body}</p>
            <div className="flex gap-x-2 mt-4 mb-0.5 items-center">
                <h1 className="text-sm font-semibold">{author}</h1>
                <h1 className="text-xs">{length}</h1>
                <Bookmark className="ml-auto cursor-pointer stroke-black hover:stroke-black/50"/>
            </div>
            <Link className="underline font-medium text-sm" href={url}>
                Read more
            </Link>
        </div>
     );
}

export default Article;