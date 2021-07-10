import React from 'react';

class DisplayClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: '',
            date: {
                currentTime: '',
                date: ''
            }
        }
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }

    componentDidMount() {
        this.getCurrentTime();
    }

    getCurrentTime() {
        const time = new Date(),
            hour = time.getHours(),
            minutes = time.getMinutes(),
            secounds = time.getSeconds(),
            date = time.getDate(),
            month = time.getMonth() + 1,
            year = time.getFullYear();

        let today = {
            currentTime: `${hour}:${minutes}:${secounds}`,
            date: `${date}/${month}/${year}`
        }

        this.setState({
            date: today,
        });
        this.setState({
            timer: setInterval(this.getCurrentTime, 1000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    render() {
        return (
            <div>
                <div className="time">{this.state.date.currentTime}</div>
                <div className="date">{this.state.date.date}</div>
            </div>
        )
    }
}

export default DisplayClock;