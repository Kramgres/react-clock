import styles from './DigitClock.module.css';

const DigitClock = ({hours, minutes, seconds}) => {
    const formattedHours = (hours < 10) ? '0' + hours : hours,
        formattedMinutes = (minutes < 10) ? '0' + minutes : minutes,
        formattedSeconds = (seconds < 10) ? '0' + seconds : seconds;
    return (
        <div className={styles.clock}>{formattedHours} : {formattedMinutes} : {formattedSeconds}</div>
    )
}

export default DigitClock;