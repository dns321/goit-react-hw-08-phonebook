import { lazy } from 'react';

export const HomeRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../views/HomeView' /* webpackChunkName: 'HomeView' */),
    ),
  },
];
