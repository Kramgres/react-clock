import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import clocksReducer from "./clocks-reducer";

let reducers = combineReducers({
    clocks: clocksReducer
});

const store = createStore(reducers, applyMiddleware(thunk))

export default store;