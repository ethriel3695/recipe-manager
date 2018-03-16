import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const API_URL = encodeURI('https://boiling-shore-39277.herokuapp.com');
// const API_URL = encodeURI('http://localhost:3030');

class Header extends React.Component {

  renderContent() {
    // eslint-disable-next-line
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return ( 
          <li>
            <a href={`${API_URL}/auth/google`}>{`Login With Google`}</a>
          </li>
        );
      default:
        return (
          <li>
            <a href={`${API_URL}/api/logout`}>{`Logout`}</a>
          </li>
        );
    }
  }

  render() {
    // eslint-disable-next-line
    console.log(this.props.auth);
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
          // eslint-disable-next-line
            to={this.props.auth ? '/recipes' : '/'}
            className='brand-logo'>
            {`Recipe Manager`}
          </Link>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  // eslint-disable-next-line
  console.log(auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);
