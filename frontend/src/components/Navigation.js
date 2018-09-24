import React from 'react';



class Navigation extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Smart Energy System</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <form className="navbar-form navbar-right">
              <div className="form-group">
                <input type="text" placeholder="Email" className="form-control" />
              </div>
              <div className="form-group">
                <input type="password" placeholder="Password" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
          </div>{/*/.navbar-collapse */}
        </div>
      </nav>

    )
  }
}

export default Navigation;