import React from 'react';
import axios from 'axios';

import Offers from '../components/Offers';
import CustomForm from '../components/OfferForm';

class OfferList extends React.Component {

    state = {
        offers: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/offer')
            .then(res => {
                this.setState({
                    offers: res.data
                });
            })
    }

    render() {
        return (
            <div>
            <jumbotron>
                <h3>{this.state.offers.user}</h3>
                <h3>{this.state.offers.price}</h3>
                <h3>{this.state.offers.amount}</h3>
            </jumbotron>
                

            </div>
        )
    }
}

export default OfferList;