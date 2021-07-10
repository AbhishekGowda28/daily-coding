import React from 'react';


class Vehiles extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            vehicles: ["Space pod", "Space rocket", "Space shuttle", "Space ship"],
        };
    }

    render(props){
    return (<div key={Math.random()} className={this.props.show ? "vehicles show" : "vehicles hide"}>
        <label>
            <input type="radio" value={this.state.vehicles[0]} name={this.props.planet} />
            {this.state.vehicles[0]}
        </label>
        <br />
        <label>
            <input type="radio" value={this.state.vehicles[1]} name={this.props.planet} />
            {this.state.vehicles[1]}
        </label>
        <br />
        <label>
            <input type="radio" value={this.state.vehicles[2]} name={this.props.planet}/>
            {this.state.vehicles[2]}
        </label>
        <br />
        <label>
            <input type="radio" value={this.state.vehicles[3]} name={this.props.planet} />
            {this.state.vehicles[3]}
        </label>
    </div>);}
}

export default Vehiles;