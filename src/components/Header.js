import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as styles from '../sharedStyles/styles.css';

// const API_URL = encodeURI('https://boiling-shore-39277.herokuapp.com');
const API_URL = encodeURI('http://localhost:3030');

class Header extends React.Component {

  renderContent () {
    // eslint-disable-next-line
    // switch (this.props.auth) {
    //   case null:
    //     return;
    //   case false:
    //     return ( 
    //       <li>
    //         <a href={`${API_URL}/auth/google`}>{'Login With Google'}</a>
    //       </li>
    //     );
    //   default:
    //     return (
    //       <li>
    //         <a href={`${API_URL}/api/logout`}>{'Logout'}</a>
    //       </li>
    //     );
    // }
    // eslint-disable-next-line
  }

  render() {
    // eslint-disable-next-line
    console.log(this.props.auth);
    return (
        <div className={[styles.box, styles.header]}>
          <Link
          // eslint-disable-next-line
            to={this.props.auth ? '/recipes' : '/'}>
            {'Recipe Manager'}
          </Link>
          <ul>
            {/*this.renderContent()*/}
            <li key='2'>
              <a href={`${API_URL}/api/logout`}>{'Logout'}</a>
            </li>
          </ul>
        </div>
    );
  }
}

function mapStateToProps({ auth }) {
  // eslint-disable-next-line
  console.log(auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);
