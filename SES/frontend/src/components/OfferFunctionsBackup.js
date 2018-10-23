import React from 'react';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import * as actions from '../store/actions/auth';
import * as update from '../containers/OfferListView'
import  OfferList from '../containers/OfferListView'
import { LinkContainer} from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function getHouseHolds(id, sellerID, price, amount, offerID) {
    const householdurl = 'http://127.0.0.1:8000/api/household/' + id;
    const sellerHouseholdurl = 'http://127.0.0.1:8000/api/household/' + sellerID;    

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
      
      
     //   return [userName, newUserMoney, newUserBattery, sellerName, newSellerMoney, newSellerBattery];
        
        return updateHouseHolds(id, userName, newUserMoney, newUserBattery, sellerID, sellerName, newSellerMoney, newSellerBattery, offerID)
    
      }))
      
      
}

function deleteHouseHold(offerID) {
    const offerDeleteUrl = 'http://127.0.0.1:8000/api/deleteoffer/' + offerID;
    axios.delete(offerDeleteUrl);
}

function updateHouseHolds (id, userName, newUserMoney, newUserBattery, sellerID, sellerName, newSellerMoney, newSellerBattery, offerID) {
    const householdUpdateUrl = `http://127.0.0.1:8000/api/household/${id}/update`
    const sellerHouseholdUpdateUrl = `http://127.0.0.1:8000/api/household/${sellerID}/update`
    const offerDeleteUrl = 'http://127.0.0.1:8000/api/deleteoffer/' + offerID;
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
          deleteHouseHold(offerID)
         // return axios.delete(offerDeleteUrl), window.location.reload();
          
      })
}

class Offer extends React.Component {
    constructor(props) {
        super(props);
    //    this.getHouseHolds = this.getHouseHolds.bind(this);
   //     this.updateHouseHolds = this.updateHouseHolds.bind(this);
   //     this.buyOffer = this.buyOffer.bind(this);
    }





    buyOffer = (offerID, sellerID, price, amount) => {
        return function () {

        const id = actions.getUserID()
        const householdurl = 'http://127.0.0.1:8000/api/household/' + id;
        const sellerHouseholdurl = 'http://127.0.0.1:8000/api/household/' + sellerID;

        const householdUpdateUrl = `http://127.0.0.1:8000/api/household/${id}/update`
        const sellerHouseholdUpdateUrl = `http://127.0.0.1:8000/api/household/${sellerID}/update`

        const offerDeleteUrl = 'http://127.0.0.1:8000/api/deleteoffer/' + offerID;
        getHouseHolds(id, sellerID, price, amount, offerID)

      //  var houseHoldsInfo = getHouseHolds(id, sellerID, price, amount, offerID);
    //   console.log(houseHoldsInfo[0])

        //const userName, sellerName, newUserMoney, newUserBattery, newSellerMoney, newSellerBattery = getHouseHolds(id, sellerID);
    //    updateHouseHolds(id, houseHoldsInfo[0], houseHoldsInfo[1], houseHoldsInfo[2], sellerID, houseHoldsInfo[3], houseHoldsInfo[4], houseHoldsInfo[5], offerID);


  
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
            Amount: {item.amount} <br></br>
            id: {item.id}

            <p></p>
            <div>
            {
             this.props.isAuthenticated ?
           <LinkContainer to="/marketplace">
            <p><a className="btn btn-primary" onClick={this.buyOffer(item.id, item.user_id, item.price, item.amount)} href="" role="button">Buy</a></p>
            </LinkContainer>
            :
            <p></p>
            }
            </div>
        </List.Item>
        )}
        
    />
    )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
  }

  export default withRouter(connect(mapStateToProps, null)(Offer));