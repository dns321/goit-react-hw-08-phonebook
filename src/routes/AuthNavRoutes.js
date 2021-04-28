import { lazy } from 'react';

export const AuthNav = [
  {
    name: 'Register',
    path: '/register',
    exact: false,
    component: lazy(() =>
      import(
        '../views/RegistrationView' /* webpackChunkName: 'RegistrationView' */
      ),
    ),
  },
  {
    name: 'Login',
    path: '/login',
    exact: false,
    component: lazy(() =>
      import('../views/LoginView' /* webpackChunkName: 'LoginView' */),
    ),
  },
];
