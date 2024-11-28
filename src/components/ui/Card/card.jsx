import placeholderImg from "../../../assets/placeholder.webp"
import style from "./card.module.css"

export default function Card({title ="", image, content="",tags="",published}){
    return(
        <div className={style.card}>
            <img className={style.thumb} src={image || placeholderImg}/>
            <div className={style.cardBody}>
                <h3>{title}</h3>
                <p>{content}</p>
                {tags.map((tag,index) => <p key={index}>{tag}</p>)}
                <button><a href="#">Leggi di più</a></button>
            </div>
        </div>
    )
}