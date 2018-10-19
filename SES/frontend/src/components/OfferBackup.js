import React from 'react';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import * as actions from '../store/actions/auth';


class Offer extends React.Component {

IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

buyOffer = () => {

    this.props.form.validateFields((error, value) => {

      const id = actions.getUserID()
      const householdurl = ' http://127.0.0.1:8000/api/household/' + id;

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



render() {
    return (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
        onChange: (page) => {
            console.log(page);
        },
        pageSize: 3,
        }}
        dataSource={this.data}
        renderItem={item => (
            
        <List.Item>
            <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/${item.user}`}>{item.user}'s offer</a>}
            description={item.description}
            />
            
            Price: {item.price} <br></br>
            Amount: {item.amount}
            <p></p>
            <p><a className="btn btn-primary" onClick={this.buyEnergy} href="#" role="button">Buy</a></p>
        </List.Item>
        )}
        
    />
    )
}
}
export default Offer;





const buyOffer = (offerID, sellerID, price, amount) => {


    const id = actions.getUserID()
    const householdurl = ' http://127.0.0.1:8000/api/household/' + id;
    const sellerHouseholdurl = ' http://127.0.0.1:8000/api/household/' + sellerID;

  //  const newMoney = this.state.money - parseInt(value.amount)
  //  const newBattery = this.state.battery + parseInt(value.amount)

    axios.all([
      axios.get(householdurl),
      axios.get(sellerHouseholdurl)
    ])
    .then(axios.spread((householdRes, sellerHouseholdRes) => {
      const newUserMoney = householdRes.data.money - price
      const newUserBattery = householdRes.data.amount + amount
      const newSellerMoney = householdRes.data.money + price
      const newSellerAmount = householdRes.data.amount - amount


     // this.setState({ money: moneyRes.data.amount, battery: batteryRes.data.level });
      // do something with both responses
      
    }));

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
}