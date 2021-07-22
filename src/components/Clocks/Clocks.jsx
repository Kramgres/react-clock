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
                {
                    clocks.map(c =>
                        <div key={c.id} className={styles.clockItem}>
                            <Clock id={c.id}
                                   utcHours={utcHours}
                                   utcMinutes={utcMinutes}
                                   utcSeconds={utcSeconds}
                                   currentTimezone={c.timezone}
                                   timezones={timezones}
                                   changeClockTimezone={changeClockTimezone}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Clocks;