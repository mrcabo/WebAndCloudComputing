import React from 'react';
import axios from 'axios';

class MyHouse extends React.Component {


    state = {
        money: 0,
        battery: 0
    }


    componentDidMount() {
        axios.all([
            axios.get('http://127.0.0.1:8000/api/money/1'),
            axios.get('http://127.0.0.1:8000/api/battery/1')
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
                    <h2>
                        My house
                    </h2>
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
            <h3>
                Energy consumption  
            </h3>
            </center>
            </div>
            <div class="col-md-6">
            <center>
            <h3>
                Energy production
            </h3>
            </center>
            </div>
        </div>
        </div>

        <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-6">
            <h3>
                Money 
                <p>{this.state.money}</p>
            </h3>
            </div>
            <div class="col-md-6">
            <h3>
                Battery
                <p>{this.state.battery}</p>
            </h3>
            </div>
            </center>
        </div>
        </div>

         <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-3">
            <h3>
                Stove
            </h3>                
            </div>
            <div class="col-md-3">
            <h3>
                Lights
            </h3>
            </div>
            <div class="col-md-3">
            <h3>
                Cleaning  
            </h3>
            </div>
            <div class="col-md-3">
            <h3>
                Home entertainment
            </h3>
            </div>
            </center>
        </div>
        </div>


    </div>

        )
    }
  }
  
  export default MyHouse;