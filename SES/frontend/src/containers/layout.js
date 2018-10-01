import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../styles/App.css';
import '../styles/Gui.css';


import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Body from '../components/MainBody';



class CustomLayout extends React.Component {
  render() {
    return (
    <Layout className="layout">
      <div>

        <Navigation/>


        {this.props.children}
  

      </div>
      </Layout>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
  }

  
export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
