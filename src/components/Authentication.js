import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as styles from '../sharedStyles/styles.css';

// const API_URL = encodeURI('https://boiling-shore-39277.herokuapp.com');
const API_URL = encodeURI('http://localhost:3030');

class Header extends React.Component {

  render() {
    // eslint-disable-next-line
    return (
      <div className={styles.loginFormContainer}>
        <h3>Login</h3>
        <div className={styles.socmedBtnContainer}>
            <a href={`${API_URL}/auth/google`}
            className={styles.socmedBtn}>{'Login With Google'}</a>
        </div>
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
