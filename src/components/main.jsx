import style from "./main.module.css"
import Card from "./ui/Card/card"

export default function Main(){
    return(
        <main className={style.mainContent}>
            <div className="container">
                <Card/>
            </div>
        </main>
    )
}