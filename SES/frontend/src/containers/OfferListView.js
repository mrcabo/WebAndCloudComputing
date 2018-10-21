import React from 'react';
import axios from 'axios';

import Offer from '../components/Offer';
import CustomForm from '../components/OfferForm';


class OfferList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        offers: []
    }
}

    componentDidMount() {
        axios.get('http://35.204.253.189/api/offer')
            .then(res => {
                this.setState({
                    offers: res.data
                });
            })
    }

    render() {
        return (
            <div>
                <Offer data={this.state.offers} />
                <CustomForm 
                    requestType="post"
                    offerID={null}
                    btnText="Create" />
            </div>
        )
    }
}

export default OfferList;