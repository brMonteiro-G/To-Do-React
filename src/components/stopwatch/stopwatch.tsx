import Button from "../button/indexButton";
import Watch from "./watch/watch";
import style from "./stopwatch.module.scss";


export function StopWatch() {
    return (

        <div className={style["stopwatch"]}>
            <p className={style["title"]}>
            Escolha um card e inicie o cronômetro
            </p>
            <div className={style["watchWrapper"]}>
            <Watch />
            </div>
                <Button>
                Começar
                </Button>
        </div>


    )
}