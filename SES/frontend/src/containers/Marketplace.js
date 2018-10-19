import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Spin } from 'antd';
import { createForm, formShape } from 'rc-form';
import OfferList from '../containers/OfferListView';

class Marketplace extends React.Component {
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

  buyEnergy = () => {
    this.props.form.validateFields((error, value) => {
      const newMoney = this.state.money - parseInt(value.amount)
      const newBattery = this.state.battery + parseInt(value.amount)
      axios.all([
        axios.put('http://127.0.0.1:8000/api/money/1/update', {
          amount: newMoney
        }),
        axios.put('http://127.0.0.1:8000/api/battery/1/update', {
          level: newBattery
        })
      ])
      .then  (
        this.setState({ money: newMoney, battery: newBattery})
      )
        console.log(value);
      });
  }

  sellEnergy = () => {
    this.props.form.validateFields((error, value) => {
      const newMoney = this.state.money + parseInt(value.level)
      const newBattery = this.state.battery - parseInt(value.level)
      axios.all([
        axios.put('http://127.0.0.1:8000/api/money/1/update', {
          amount: newMoney
        }),
        axios.put('http://127.0.0.1:8000/api/battery/1/update', {
          level: newBattery
        })
      ])
      .then  (
        this.setState({ money: newMoney, battery: newBattery})
      )
        console.log(value);
      });
  }


    render() {
      let errors;
      const { getFieldProps, getFieldError } = this.props.form;
      return (
        <div className="jumbotron">
        
        <div className="container">
          <center><h1>Marketplace</h1>
          <p>Buy and sell energy on the marketplace.</p>
          </center>
          <OfferList></OfferList>
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

        <div>

      </div>

        <div class="jumbotron">
          <div class="row">
          <center>
              <div class="col-md-6">

                <input {...getFieldProps('amount', {
                  onChange(){}, // have to write original onChange here if you need
                  rules: [{required: true}],
                })}/>
                <p><a className="btn btn-primary" onClick={this.buyEnergy} href="#" role="button">Buy</a></p>
                </div>

              <div class="col-md-6">
                <input {...getFieldProps('level', {
                  onChange(){}, // have to write original onChange here if you need
                  rules: [{required: true}],
                })}/>
                <p><a className="btn btn-primary" onClick={this.sellEnergy} href="#" role="button">Sell</a></p>

              </div>
              </center>
          </div>
        </div>

        </div>
      </div> 

        )
    }
  }
  
  export default createForm()(Marketplace);