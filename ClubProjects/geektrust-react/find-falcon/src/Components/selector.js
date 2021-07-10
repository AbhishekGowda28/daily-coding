import React from 'react';


// components
import Vehicles from './vehicles';

class Selector extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vehiclesShow : false,
            planetSelected : null
        };
    }

SelectingPlanet(event) {
    if(event.target.value)
    this.setState({
        vehiclesShow:true,
        planetSelected : event.target.value
    });else
        this.setState({
            vehiclesShow: false
        });
    console.log(event.target.className);
}

    render(){
        console.log(this.props);
        return(<div className="options">
            <select className="planetSelect" onChange={this.SelectingPlanet.bind(this)}>
                    <option></option>
                    <option value="Donlon">Donlon</option>
                    <option value="Enchai">Enchai</option>
                    <option value="Jebing">Jebing</option>
                    <option value="Sapir">Sapir</option>
                    <option value="Lerbin">Lerbin</option>
                    <option value="Pingasor">Pingasor</option>
            </select>
            <Vehicles  show={this.state.vehiclesShow} planet={this.state.planetSelected}/>
        </div>);
    }

}

export default Selector;



