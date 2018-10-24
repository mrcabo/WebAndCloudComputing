import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class MyHouse extends React.Component {


    state = {
        money: 0,
        battery: 0,
        household: [],
        energyConsumption: 0,
        energyProduction: 0,
        stoves: 0,
        lights: 0,
        household_appliances: 0,
        home_entertainment: 0,
        energy: []
 
    }


    componentDidMount() {
  
        if(this.props.isAuthenticated) {
        const id = actions.getUserID()
        const householdurl = ' http://127.0.0.1:8000/api/household/' + id;
        const energyurl = ' http://127.0.0.1:8000/api/energy/' + id;
        
        axios.all([
            
            axios.get(householdurl),
            axios.get(energyurl)
          ])
          .then(axios.spread((householdRes, energyRes) => {
            this.setState({household: householdRes.data}),
            this.setState({energy: energyRes.data});
          }));
        
        }
    }

    getRates = (stoves, lights, household_appliances, home_entertainment, solar_panels, windmills) => {
        const consumptionrate = 10*parseInt(stoves) + parseInt(lights) + 20*parseInt(household_appliances) + 5*parseInt(home_entertainment)
        const productionrate = 30*parseInt(solar_panels) + 60*parseInt(windmills)
        return [consumptionrate, productionrate]

    }

    updateAppliances = (event, requestType, offerID) => {
        event.preventDefault();
        const stoves = event.target.elements.stoves.value;
        const lights = event.target.elements.lights.value;
        const household_appliances= event.target.elements.household_appliances.value;
        const home_entertainment = event.target.elements.home_entertainment.value;
        const solar_panels = event.target.elements.solar_panels.value;
        const windmills = event.target.elements.windmills.value;
        var rates = this.getRates(stoves, lights, household_appliances, home_entertainment, solar_panels, windmills)
        const consumptionrate = rates[0]
        const productionrate = rates[1]

        const user = actions.getUsername()
        const user_id = actions.getUserID()
        
        var newEnergy = {user_id: user_id, productionrate: productionrate, consumptionrate: consumptionrate, stoves: stoves, lights: lights, household_appliances: household_appliances, home_entertainment: home_entertainment, solar_panels: solar_panels, windmills: windmills}

                axios.put(`http://127.0.0.1:8000/api/energy/${user_id}/update`, {
                    user_id: user_id,
                    productionrate: productionrate,
                    consumptionrate: consumptionrate,
                    stoves: stoves,
                    lights: lights,
                    household_appliances: household_appliances,
                    home_entertainment: home_entertainment,
                    solar_panels: solar_panels,
                    windmills: windmills
                })
                .then(res => {
                    this.setState({energy: newEnergy});
                })
        
    }

    render() {
      return (
        <div>

        <div class="jumbotron jumbotron-fluid">
        <div class="row">
            <div class="col-md-12">
                
                    <center><h1>My house</h1>
                    <p>
                       View all information about your houses energy consumption and production here.
                    </p>
                    </center>
                </div>
            </div>
        </div>
        <div className="container">
 
        <div class="container-fluid">

        
        {
        this.props.isAuthenticated ?
        <div>   

        <div class="jumbotron border-varant=dark" border-variant="dark">
        
        <div class="row">
            <div class="col-md-6">
            <center>
                <h3>Energy consumption</h3>
                <p style={{color: "red"}}>{this.state.energy.consumptionrate} kW·h</p> 
                <img src="img/consumptionSymbol.svg" alt="Slate Bootstrap Admin Theme" width={100} height={100} />
            </center>
            </div>
            <div class="col-md-6">
            <center>
                <h3>Energy production</h3>
                <p style={{color: "green"}}>{this.state.energy.productionrate} kW·h</p> 
                <img src="img/productionSymbol.svg" alt="Slate Bootstrap Admin Theme" width={100} height={100} />
            </center>
            </div>
        </div>
        </div>

        <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-6">

                <div>
                <h3>Money</h3>
                <p>{this.state.household.money}</p>
                <img src="img/moneySymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
                </div>


            </div>
            <div class="col-md-6">

                <div>
                <h3>Battery</h3>
                <p style={(this.state.household.battery < 15)? {color: "orange"}:{color: "green"}}>{this.state.household.battery} kW·h</p> 
                <img src="img/batterySymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
                </div>
                
   
            </div>
            </center>
        </div>
        </div>

         <div class="jumbotron">
        <div class="row">
        <center>
            <div class="col-md-2">
                <h3>Stoves</h3>
                <p>{this.state.energy.stoves}</p>
                <img src="img/stoveSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-2">
                <h3>Lights</h3>
                <p>{this.state.energy.lights}</p>
                <img src="img/lightSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-2">
                <h3>Household Appliances</h3>
                <p>{this.state.energy.household_ppliances}</p>
                <img src="img/cleaningSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-2">
                <h3>Home entertainment</h3>
                <p>{this.state.energy.home_entertainment}</p>
                <img src="img/entertainmentSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-2">
                <h3>Solar panels</h3>
                <p>{this.state.energy.solar_panels}</p>
                <img src="img/entertainmentSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            <div class="col-md-2">
                <h3>Windmills</h3>
                <p>{this.state.energy.windmills}</p>
                <img src="img/entertainmentSymbol.svg" alt="Slate Bootstrap Admin Theme" width={80} height={80} />
            </div>
            </center>
        </div>
        </div>

                <Form onSubmit={(event) => this.updateAppliances(
                event,
                this.props.requestType,
                this.props.offerID )}>
            <FormItem label="Stoves" >
                <Input name="stoves" placeholder="Enter the amount of stoves" />
            </FormItem>
            <FormItem label="Lights" >
                <Input name="lights" placeholder="Enter the amount of lights" />
            </FormItem>
            <FormItem label="Household appliances" >
                <Input name="household_appliances" placeholder="Enter the amount of household appliances" />
            </FormItem>
            <FormItem label="Home entertainment" >
                <Input name="home_entertainment" placeholder="Enter the amount of home entertainment systems"  />
            </FormItem>
            <FormItem label="Solar panels" >
                <Input name="solar_panels" placeholder="Enter the amount of solar panels"  />
            </FormItem>
            <FormItem label="Windmills" >
                <Input name="windmills" placeholder="Enter the amount of windmills" />
            </FormItem>
            <FormItem>
                <Button type="primary" htmlType="submit">Update</Button>
            </FormItem>
            
            </Form>
        

                </div>
               :
               <div class="jumbotron">
               <h3>Login to see info</h3>
               </div>
               } 

        </div>
        </div>


        </div>
        )
    }
  }
  
  const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
  }
  
  
 // export default MyHouse;
  export default withRouter(connect(mapStateToProps, null)(MyHouse));