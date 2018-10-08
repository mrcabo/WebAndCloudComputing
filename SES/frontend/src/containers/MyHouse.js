import React from 'react';
import axios from 'axios';

class MyHouse extends React.Component {


    state = {
        money: 0,
        battery: 0,
        energyConsumption: 0,
        energyProduction: 0,
        stove: 0,
        lights: 0,
        householdAppliances: 0,
        homeEntertainment: 0
    }


    componentDidMount() {
        axios.all([
            axios.get('http://127.0.0.1:8000/api/money/1'),
            axios.get('http://127.0.0.1:8000/api/battery/1'),
            axios.get('http://127.0.0.1:8000/api/energyconsumption/1'),
            axios.get('http://127.0.0.1:8000/api/energyproduction/1'),
            axios.get('http://127.0.0.1:8000/api/stove/1'),
            axios.get('http://127.0.0.1:8000/api/lights/1'),
            axios.get('http://127.0.0.1:8000/api/householdappli/1'),
            axios.get('http://127.0.0.1:8000/api/entertainment/1')
          ])
          .then(axios.spread((moneyRes, batteryRes) => {
            this.setState({ money: moneyRes.data.amount, battery: batteryRes.data.level });
            // do something with both responses
          }));
        
        }



    render() {
      return (
        
    
        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="jumbotron">
                    <h2>My house</h2>
                    <p>
                       View all information about your houses energy consumption and production here.
                    </p>
                </div>
            </div>
        </div>
        <div class="jumbotron">
        <div class="row">
            <div class="col-md-6">
            <center>
                <h3>Energy consumption</h3>
                <p style={{color: "red"}}>{this.state.energyConsumption} kW·h</p> 
                <img src="img/consumptionSymbol.svg" alt="Slate Bootstrap Admin Theme" width={100} height={100} />
            </center>
            </div>
            <div class="col-md-6">
            <center>
                <h3>Energy production</h3>
                <p style={{color: "green"}}>{this.state.energyProduction} kW·h</p> 
                <img src="img/productionSymbol.svg" alt="Slate Bootstrap Admin Theme" width={100} height={100} />
            </center>
            </div>
        </div>
        </div>

        <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-6">
                <h3>Money</h3>
                <p>{this.state.money}</p>
                <img src="img/moneySymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-6">
                <h3>Battery</h3>
                <p style={(this.state.battery < 15)? {color: "orange"}:{color: "green"}}>{this.state.battery} kW·h</p> 
                <img src="img/batterySymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            </center>
        </div>
        </div>

         <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-3">
                <h3>Stove</h3>
                <p>{this.state.stove}</p>
                <img src="img/stoveSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-3">
                <h3>Lights</h3>
                <p>{this.state.lights}</p>
                <img src="img/lightSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-3">
                <h3>Household Appliances</h3>
                <p>{this.state.householdAppliances}</p>
                <img src="img/cleaningSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-3">
                <h3>Home entertainment</h3>
                <p>{this.state.homeEntertainment}</p>
                <img src="img/entertainmentSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            </center>
        </div>
        </div>


    </div>

        )
    }
  }
  
  export default MyHouse;