import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

//components
import Controller from './controller';
import TimeLeft from './TimeLeft';
import Header from './Header'

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            planets : []
        };
    }

    getPlanets() {
        var planets_url = "https://findfalcone.herokuapp.com/planets";

        fetch(planets_url, {
            method: "GET"
        })
            .then(function (response, reject) {
                console.log(response);
                if (response.ok)
                    return response.json();
            }).then(function (data) {
                this.seperatePlanets(data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }   

     seperatePlanets(planets) {
        console.log(planets);
        var planetsStack = [];
        planets.map((element) => {
            return planetsStack.push(element.name);
        });
         this.setState({
            planets : planetsStack
        });
    }


    async componentWillMount(){
        await this.getPlanets();
    }

    


    

    render(){
        console.log(this.state);
        return (<main>
            <h2 className="mainHeader">Select the planet to Search</h2>
            <Controller planets={this.state}/>
            <TimeLeft />
            <BrowserRouter>
               <div>
                 <Link to="/calculate">
                    <button className="calculateFalconeLocation">Find Falcone</button>
                </Link>
                <Route exact={true} path="/calculate" component={Header}/>
                </div>
            </BrowserRouter>
        </main>); 
    }
}

export default Main;