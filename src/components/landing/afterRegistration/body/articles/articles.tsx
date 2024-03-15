import Article from "./article";

function Articles() {
    return ( 
        <div>
            <h1 className="text-2xl font-medium ">Articles</h1>
            <div className="border-b border-black mt-2 mb-8 mr-28"/>
            <div className="p-4 flex flex-wrap justify-between gap-y-12">
                <Article
                    image="/hmdlh.jpg"
                    title="Mecca and the Ka'ba"
                    body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
                    author="Lucy hegmann"
                    length="03 minute read"
                    url="/articles/1"
                />
                <Article
                    image="/hmdlh.jpg"
                    title="Mecca and the Ka'ba"
                    body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
                    author="Lucy hegmann"
                    length="03 minute read"
                    url="/articles/1"
                />
                <Article
                    image="/hmdlh.jpg"
                    title="Mecca and the Ka'ba"
                    body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
                    author="Lucy hegmann"
                    length="03 minute read"
                    url="/articles/1"
                />
                <Article
                    image="/hmdlh.jpg"
                    title="Mecca and the Ka'ba"
                    body="One of the five pillars of Islam central to Muslim belief, Hajj is the pilgrimage to Mecca that"
                    author="Lucy hegmann"
                    length="03 minute read"
                    url="/articles/1"
                />
            </div>
        </div>
     );
}

export default Articles;