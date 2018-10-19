import React from 'react';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import * as actions from '../store/actions/auth';
import * as update from '../containers/OfferListView'
import  OfferList from '../containers/OfferListView'
import { LinkContainer} from 'react-router-bootstrap';

class Offer extends React.Component {

    buyOffer = (offerID, sellerID, price, amount) => {
        return function () {

        const id = actions.getUserID()
        const householdurl = 'http://127.0.0.1:8000/api/household/' + id;
        const sellerHouseholdurl = 'http://127.0.0.1:8000/api/household/' + sellerID;

        const householdUpdateUrl = `http://127.0.0.1:8000/api/household/${id}/update`
        const sellerHouseholdUpdateUrl = `http://127.0.0.1:8000/api/household/${sellerID}/update`

        const offerDeleteUrl = 'http://127.0.0.1:8000/api/deleteoffer/' + offerID;
  

        axios.all([
          axios.get(householdurl),
          axios.get(sellerHouseholdurl)
        ])
        .then(axios.spread((householdRes, sellerHouseholdRes) => {
          
          const userName = String(householdRes.data.user)
          const sellerName = String(sellerHouseholdRes.data.user)
          const newUserMoney = householdRes.data.money - parseInt(price)
          const newUserBattery = householdRes.data.battery+ parseInt(amount)
          const newSellerMoney = sellerHouseholdRes.data.money + parseInt(price)
          const newSellerBattery = sellerHouseholdRes.data.battery - parseInt(amount)


          return axios.all([
              axios.put(householdUpdateUrl, {
                user_id: id,
                user: userName,
                money: newUserMoney,
                battery: newUserBattery
              }),
              axios.put(sellerHouseholdUpdateUrl, {
                user_id: sellerID,
                user: sellerName,
                money: newSellerMoney,
                battery: newSellerBattery
              })
            ])
            .then(res => {

                return axios.delete(offerDeleteUrl), window.location.reload();
                
            })
        }));
  
    }
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
        dataSource={this.props.data}
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
            

           <LinkContainer to="/marketplace">
            <p><a className="btn btn-primary" onClick={this.buyOffer(item.id, item.user_id, item.price, item.amount)} href="" role="button">Buy</a></p>
            </LinkContainer>
        </List.Item>
        )}
        
    />
    )
    }
}

export default Offer;