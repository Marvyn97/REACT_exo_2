import React from "React";

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.date = new date();
        this.state = {
            time: this.date.getHours()+' : '+this.date.getMinutes()+' : '+this.date.getSeconds(),
        }
    }

    componentDidMount() {
        setInterval(this.changeTime, 1000);
    }

    changeTime = () => {
        this.date = new this.date();
        this.setState({time: this.date.getHours()+' : '+this.date.getMinutes()+' : '+this.date.getSeconds()});
    }

    render() {
        return (
            <p>{this.state.time}</p>
        )
    }
}

export default Clock;