import React from 'react';
import { List, Avatar, Icon } from 'antd';
import axios from 'axios';
import * as actions from '../store/actions/auth';
import * as update from '../containers/OfferListView'
import  OfferList from '../containers/OfferListView'
import { LinkContainer} from 'react-router-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function deleteOffer(offerID) {
    const offerDeleteUrl = 'http://127.0.0.1:8000/api/deleteoffer/' + offerID;
    axios.delete(offerDeleteUrl);
}

async function reload() {
    await sleep(100);
    window.location.reload()
}

class Offer extends React.Component {

    buyOffer = (offerID, sellerID, price, amount) => {
        return function () {

        const id = actions.getUserID()
        const householdurl = 'http://35.204.253.189/api/household/' + id;
        const sellerHouseholdurl = 'http://35.204.253.189/api/household/' + sellerID;

        const householdUpdateUrl = `http://127.0.0.1:8000/api/household/${id}/update`
        const sellerHouseholdUpdateUrl = `http://127.0.0.1:8000/api/household/${sellerID}/update`
  

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
             //   axios.delete(offerDeleteUrl);
                deleteOffer(offerID);
              //  sleep(20000);
               // console.log("TEST")
              //  this.history.pushState(null, '/');
             //   this.history.pushState(null, '/marketplace');
                //return refresh()
                reload();
              //  return window.location.reload();
                
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