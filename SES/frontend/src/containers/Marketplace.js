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
        <div>
        <div className="jumbotron jumbotron-fluid">
        
        <center><h1>Marketplace</h1>
        <p>Buy and sell energy on the marketplace.</p>
        </center>
        </div> 

        <div className="container">
        <div class="container-fluid">

         <div className="jumbotron">
          <OfferList></OfferList>
        <div>
      </div>
      </div>
      </div>
      </div>
      </div>
     

        )
    }
  }
  
  export default createForm()(Marketplace);