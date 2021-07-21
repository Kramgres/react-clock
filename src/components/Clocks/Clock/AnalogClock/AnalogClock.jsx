import styles from "./AnalogClock.module.css"
import {useEffect, useRef} from "react";

const AnalogClock = ({hours, minutes, seconds}) => {

    const hrRef = useRef(),
        mnRef = useRef(),
        scRef = useRef();

    useEffect(() => {
        const hoursDeg = hours * 30,
            minutesDeg = minutes * 6,
            secondsDeg = seconds * 6;
        hrRef.current.style.transform = `rotate(${hoursDeg}deg)`
        mnRef.current.style.transform = `rotate(${minutesDeg}deg)`
        scRef.current.style.transform = `rotate(${secondsDeg}deg)`
    })

    return (
        <div className={styles.clock}>
            <div className={styles.hour}>
                <div ref={hrRef} className={styles.hr}></div>
            </div>
            <div className={styles.min}>
                <div ref={mnRef} className={styles.mn}></div>
            </div>
            <div className={styles.sec}>
                <div ref={scRef} className={styles.sc}></div>
            </div>
        </div>
    )
}

export default AnalogClock;