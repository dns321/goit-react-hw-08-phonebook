import { lazy } from 'react';

export const ContactsRoutes = [
  {
    name: 'Contacts',
    path: '/contacts',
    exact: false,
    component: lazy(() =>
      import('../views/ContactsView' /* webpackChunkName: 'ContactsView' */),
    ),
  },
];
