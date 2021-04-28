import React, { Suspense, Component } from 'react';
import Loader from '../../Components/loader/Loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ContactsRoutes } from '../../routes/ContactsRoutes';
import { HomeRoutes } from '../../routes/HomeRoutes';
import { AuthNav } from '../../routes/AuthNavRoutes';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operation';
import PrivatRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

class Main extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <main>
        <Suspense fallback={<Loader />}>
          <Switch>
            {HomeRoutes.map(({ path, exact, component }) => (
              <Route
                exact={exact}
                path={path}
                component={component}
                key={path}
              />
            ))}
            {ContactsRoutes.map(({ path, exact, component }) => (
              <PrivatRoute
                exact={exact}
                path={path}
                component={component}
                key={path}
                redirectTo="/login"
              />
            ))}
            {AuthNav.map(({ path, exact, component }) => (
              <PublicRoute
                exact={exact}
                path={path}
                component={component}
                key={path}
                redirectTo="/contacts"
                restricted
              />
            ))}
            <Redirect from="" to="/" />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(Main);
