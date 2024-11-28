import style from "./main.module.css"
import Card from "./ui/Card/card"
import {posts} from "../data/posts"

export default function Main(){
    return(
        <main className={style.mainContent}>
            <div className="container">
                <div className={style.row}>
                    {posts.map((post)=>
                        post.published===true ?
                        <div className={style.col3} key={post.id}>
                            <Card title={post.title} image={post.image} content={post.content} tags={post.tags} published={post.    published}/>
                        </div> : null
                    )}
                </div>
            </div>
        </main>
    )
}