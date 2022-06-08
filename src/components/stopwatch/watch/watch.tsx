import style from "./watch.module.scss";


function Watch(){
    return (
        <>
        <span className={style["watchNumber"]}>0</span>
        <span className={style["watchNumber"]}>0</span>
        <span className={style["watchDivider"]}>:</span>
        <span className={style["watchNumber"]}>0</span>
        <span className={style["watchNumber"]}>0</span>
        </>
    )
}

export default Watch