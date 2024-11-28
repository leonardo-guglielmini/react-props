import style from "./card.module.css"

export default function Card({title ="", image, content="",tags="",published}){
    return(
        <div className={style.card}>
            <div className={style.cardImage}>
                <h2 className={style.cardImageText}>600 x 400</h2>
            </div>
            <div className={style.cardBody}>
                <h3>Titolo del Post</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quos vero impedit tempora repudiandae expedita aliquam? Perferendis fuga accusantium quas voluptates ducimus nostrum, eligendi reprehenderit distinctio aperiam suscipit corporis ex.</p>
                <button><a href="#">Leggi di più</a></button>
            </div>
        </div>
    )
}