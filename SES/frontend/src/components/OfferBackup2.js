import React from 'react';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import * as actions from '../store/actions/auth';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const buyOffer = (offerID, sellerID, price, amount) => {


      const id = actions.getUserID()
      const householdurl = 'http://35.204.253.189/api/household/' + id;
      const sellerHouseholdurl = 'http://35.204.253.189/api/household/' + sellerID;
      const offerDeleteUrl = 'http://35.204.253.189/api/deleteoffer/' + offerID;

    //  const newMoney = this.state.money - parseInt(value.amount)
    //  const newBattery = this.state.battery + parseInt(value.amount)

      axios.all([
        axios.get(householdurl),
        axios.get(sellerHouseholdurl)
      ])
      .then(axios.spread((householdRes, sellerHouseholdRes) => {
        const newUserMoney = householdRes.data.money - parseInt(price)
        const newUserBattery = householdRes.data.amount + parseInt(amount)
        const newSellerMoney = sellerHouseholdRes.data.money + parseInt(price)
        const newSellerBattery = sellerHouseholdRes.data.amount - parseInt(amount)

        console.log(this.newUserMoney);
        console.log(newUserBattery);

       // this.setState({ money: moneyRes.data.amount, battery: batteryRes.data.level });
        // do something with both responses
        return  axios.all([
            axios.put(householdurl, {
              money: newUserMoney,
              battery: newUserBattery
            }),
            axios.put(sellerHouseholdurl, {
              money: newSellerMoney,
              battery: newSellerBattery
            })
          ])
          .then(res => {
              return axios.delete(offerDeleteUrl)
           // this.setState({ money: newMoney, battery: newBattery})
          })
      }));

  }



const Offer = (props) => {
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
        dataSource={props.data}
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
            <p><a className="btn btn-primary" onClick={buyOffer(item.id, item.user_id, item.price, item.amount)} href="#" role="button">Buy</a></p>
        </List.Item>
        )}
        
    />
    )
}

export default Offer;