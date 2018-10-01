import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


class Navigation extends React.Component {
  render() {
    return (
      <div className="navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Smart Energy System</a>
          </div>
          <div className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">

              <li><Link to="/">Home</Link></li>
              
              {
                this.props.isAuthenticated ?
                <li><a href="#" onClick={this.props.logout}>Logout</a></li>
                :
                <li><Link to="/login">Login</Link></li>
              }
        
            </ul>
          </div>
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      logout: () => dispatch(actions.logout()) 
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));