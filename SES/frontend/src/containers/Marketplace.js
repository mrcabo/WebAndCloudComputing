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
  if(this.props.isAuthenticated) {
  axios.all([
      axios.get('http://127.0.0.1:8000/api/money/1'),
      axios.get('http://127.0.0.1:8000/api/battery/1')
    ])
    .then(axios.spread((moneyRes, batteryRes) => {
      this.setState({ money: moneyRes.data.amount, battery: batteryRes.data.level });
      // do something with both responses
    }));
  }
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