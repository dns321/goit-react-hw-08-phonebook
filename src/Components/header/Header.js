import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HomeRoutes } from '../../routes/HomeRoutes';
import { ContactsRoutes } from '../../routes/ContactsRoutes';
import { AuthNav } from '../../routes/AuthNavRoutes';
import './Header.scss';
import authSelectors from '../../redux/auth/auth-selectors';
import UserMenu from './UserMenu';

const Header = ({ isAuthenticated }) => {
  return (
    <header>
      <nav className="nav-list">
        <ul className="nav-items-list">
          {HomeRoutes.map(({ name, path, exact }) => (
            <li key={path} className="nav-item-list">
              <NavLink
                to={path}
                exact={exact}
                className="nav-item-link"
                activeClassName="activ-nav-item-link"
              >
                {name}
              </NavLink>
            </li>
          ))}
          {isAuthenticated && (
            <>
              {ContactsRoutes.map(({ name, path, exact }) => (
                <li key={path} className="nav-item-list">
                  <NavLink
                    to={path}
                    exact={exact}
                    className="nav-item-link"
                    activeClassName="activ-nav-item-link"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </>
          )}
        </ul>
        {isAuthenticated ? (
          <UserMenu />
        ) : (
          <ul className="nav-items-list">
            {AuthNav.map(({ name, path, exact }) => (
              <li key={path} className="nav-item-list">
                <NavLink
                  to={path}
                  exact={exact}
                  className="nav-item-link"
                  activeClassName="activ-nav-item-link"
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(Header);
