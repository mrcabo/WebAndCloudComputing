import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';


class Body extends React.Component {
    render() {
      return (
        <div className="container">
        <div className="row">
        
          <div className="col-md-6">
            <h2>My House</h2>
            <Link to="/myhouse">
            <a href="#" className="thumbnail home-thumb">
              <img src="img/houseSymbol.png" alt="Slate Bootstrap Admin Theme" width={300} height={300} />
            </a>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <LinkContainer to="/myhouse">
            <p><a className="btn btn-primary" href="#" role="button">View my house »</a></p>
            </LinkContainer>
          </div>

          <div className="col-md-6">
            <h2>Energy Marketplace</h2>
            <Link to="/marketplace">
            <a href="#" className="thumbnail home-thumb">
              <img src="img/tradeSymbol.png" alt="Slate Bootstrap Admin Theme" width={300} height={300} />
            </a>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <LinkContainer to="/marketplace">
            <p><a className="btn btn-primary" href="#" role="button">View marketplace »</a></p>
            </LinkContainer>

          </div>
        </div>
        </div>
        )
    }
  }
  
  export default Body;