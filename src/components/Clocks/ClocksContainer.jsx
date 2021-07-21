import React from 'react';
import Clocks from "./Clocks";
import {connect} from "react-redux";
import {changeClockTimezone, getCurrentTime, getTimezones} from "../../redux/clocks-reducer";

class ClocksContainer extends React.Component{
    componentDidMount() {
        this.props.getCurrentTime();
        this.props.getTimezones();
    }

    render() {
        return (
            <Clocks utcHours={this.props.utcHours}
                    utcMinutes={this.props.utcMinutes}
                    utcSeconds={this.props.utcSeconds}
                    timezones={this.props.timezones}
                    clocks={this.props.clocks}
                    getCurrentTime={this.props.getCurrentTime}
                    changeClockTimezone={this.props.changeClockTimezone}/>
        )
    }
}

let mapStateToProps = (state) => ({
    utcHours: state.clocks.utcHours,
    utcMinutes: state.clocks.utcMinutes,
    utcSeconds: state.clocks.utcSeconds,
    timezones: state.clocks.timezones,
    clocks: state.clocks.clocks
})

export default connect(mapStateToProps, {getCurrentTime, getTimezones, changeClockTimezone})(ClocksContainer);
