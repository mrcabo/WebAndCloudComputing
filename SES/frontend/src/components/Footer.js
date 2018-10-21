import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import axios from 'axios';

class Footer extends React.Component {
    render() {
      return (
        
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3><span>Smart Energy System</span></h3>
            <p></p>
            <p className="footer-company-name">SES © 2018</p>
          </div>
          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker" />
              <p><span>Nijenborgh 9</span> Groningen, Groningen</p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p>050-5031234</p>
            </div>
            <div>
              <i className="fa fa-envelope" />
              <p><a href="mailto:support@company.com">info@gses.nl</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>Find us on:</span>
              <h1><a href="#" class="fa fa-facebook"></a>
              <br></br>
                <a href="#" class="fa fa-twitter"></a>
                <br></br>
                <a href="#" class="fa fa-instagram"></a>
            </h1>
            </p>
          </div>
        </footer>
      );
    }
}

export default Footer;
