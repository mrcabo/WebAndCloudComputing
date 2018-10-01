import React from 'react';

class Body extends React.Component {
    render() {
      return (
        
        <div className="row">
          <div className="col-md-6">
            <h2>My House</h2>
            <a href="#" className="thumbnail home-thumb">
              <img src="img/houseSymbol.png" alt="Slate Bootstrap Admin Theme" width={300} height={300} />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p><a className="btn btn-primary" href="#" role="button">View my house »</a></p>
          </div>
          <div className="col-md-6">
            <h2>Energy Marketplace</h2>
            <a href="#" className="thumbnail home-thumb">
              <img src="img/tradeSymbol.png" alt="Slate Bootstrap Admin Theme" width={300} height={300} />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p><a className="btn btn-primary" href="#" role="button">View market »</a></p>
          </div>
        </div>

        )
    }
  }
  
  export default Body;