import axios from "axios";

export const clocksApi = {
    getTimezones(){
        return axios.get("timezones.json").then(response => {
            return response.data;
        })
    }
}