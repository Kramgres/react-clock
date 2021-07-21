import AnalogClock from "./AnalogClock/AnalogClock";
import DigitClock from "./DigitClock/DigitClock";
import Dropdown from "../../common/Dropdown/Dropdown";
import {useEffect} from "react";

const Clock = ({id, utcHours, utcMinutes, utcSeconds, clocks, timezones, changeClockTimezone}) => {

    const currentTimezone = clocks.find(c => c.id === id)?.timezone,
        hours = utcHours+ +currentTimezone,
        minutes = utcMinutes,
        seconds = utcSeconds,
        timezonesNames = timezones.map(t => t.name),
        firstTimezonesName = timezonesNames[0];

    const selectTimezone = (timezoneName) => {
        changeClockTimezone(id, timezoneName)
    }

    useEffect(() => {
        changeClockTimezone(id, firstTimezonesName)
    }, [changeClockTimezone, id, firstTimezonesName])

    return (
        <>
            <AnalogClock hours={hours} minutes={minutes} seconds={seconds}/>
            <DigitClock hours={hours} minutes={minutes} seconds={seconds}/>
            <Dropdown items={timezonesNames} onSelect={selectTimezone}/>
        </>
    )
}

export default Clock;