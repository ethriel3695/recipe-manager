import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/authActions';
import * as styles from '../sharedStyles/styles.css';

import Header from './Header';
import Landing from './Landing';
import Authentication from './Authentication';
const Dashboard = () => <h2>Dashboard</h2>;
const RecipeNew = () => <h2>RecipeNew</h2>;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <div className={styles.wrapper}>
          <BrowserRouter>
            <div>
            {this.props.auth ?
              <Header /> : <div /> 
            }
              <Route exact={true} path ='/' component={this.props.auth ? Landing : Authentication} />
              <Route path ='/recipes' component={Dashboard} />
              <Route path ='/recipes/new' component={RecipeNew} />
            </div>
          </BrowserRouter>
        </div>
    );
  }
}

App.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  auth: PropTypes.object || PropTypes.bool
};

function mapStateToProps({ auth }) {
  // eslint-disable-next-line
  console.log(auth);
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
