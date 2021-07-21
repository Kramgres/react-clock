import {clocksApi} from "../api/api";

const SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_TIMEZONES = 'SET_TIMEZONES',
    SET_CLOCK_TIMEZONE = 'SET_CLOCK_TIMEZONE',
    TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    utcHours: null,
    utcMinutes: null,
    utcSeconds: null,
    clocks: [
        {
            id: null,
            timezone: null,
            timezoneName: ""
        }
    ],
    timezones: [
        {
            timezone: null,
            name: ""
        }
    ],
    isFetching: false
}

const clocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TIME:
            return {
                ...state,
                utcHours: action.hours,
                utcMinutes: action.minutes,
                utcSeconds: action.seconds
            }
        case SET_TIMEZONES:
            return {
                ...state,
                timezones: action.timezones
            }
        case SET_CLOCK_TIMEZONE:
            let clock = state.clocks.find(c => c.id === action.id);
            if (!clock){
                clock = {};
                clock.id = action.id
            }
            clock.timezone = state.timezones.find(t => t.name === action.timezoneName)?.timezone;
            clock.timezoneName = action.timezoneName;

            return {
                ...state,
                clocks: [...state.clocks, clock]
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export const setCurrentTime = (hours, minutes, seconds) => ({type: SET_CURRENT_TIME, hours, minutes, seconds});
export const setTimezones = (timezones) => ({type: SET_TIMEZONES, timezones});
export const setClockTimezone = (id, timezoneName) => ({type: SET_CLOCK_TIMEZONE, id, timezoneName})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getCurrentTime = () => (dispatch) => {
    let day = new Date();
    dispatch(setCurrentTime(day.getUTCHours(), day.getUTCMinutes(), day.getUTCSeconds()));
}

export const getTimezones = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await clocksApi.getTimezones();
    dispatch(setTimezones(response));
    dispatch(toggleIsFetching(false));
}

export const changeClockTimezone = (clockId, timezoneName) => (dispatch) => {
    dispatch(setClockTimezone(clockId, timezoneName))
}

export default clocksReducer;