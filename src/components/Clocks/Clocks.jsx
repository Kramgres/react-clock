import Clock from "./Clock/Clock";
import styles from "./Clocks.module.css";
import {useEffect} from "react";

const Clocks = ({utcHours, utcMinutes, utcSeconds, timezones, clocks, getCurrentTime, changeClockTimezone}) => {
    useEffect(() => {
        let clockTimer = setTimeout(() => getCurrentTime(), 1000)
        return () => clearTimeout(clockTimer);
    })

    return (
        <div className="container">
            <div className={styles.clocksWrapper}>
                <div className={styles.clockItem}>
                    <Clock id={1}
                           utcHours={utcHours}
                           utcMinutes={utcMinutes}
                           utcSeconds={utcSeconds}
                           clocks={clocks}
                           timezones={timezones}
                           changeClockTimezone={changeClockTimezone}/>
                </div>
                <div className={styles.clockItem}>
                    <Clock id={2}
                           utcHours={utcHours}
                           utcMinutes={utcMinutes}
                           utcSeconds={utcSeconds}
                           clocks={clocks}
                           timezones={timezones}
                           changeClockTimezone={changeClockTimezone}/>
                </div>
            </div>
        </div>
    )
}

export default Clocks;