import React from 'react';
import axios from 'axios';

import Offer from '../components/Offer';
import CustomForm from '../components/OfferForm';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

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
                <center>
                <Offer data={this.state.offers} />
                </center>
                <div>
                
                        {
                 this.props.isAuthenticated ?
                 
                <CustomForm 
                    requestType="post"
                    offerID={null}
                    btnText="Create" />
                :
                <p></p>
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.token !== null
    }
  }

export default withRouter(connect(mapStateToProps, null)(OfferList))