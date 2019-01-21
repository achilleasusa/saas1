// import React from 'react';
// import Loadable from 'react-loadable'

// import DefaultLayout from './containers/DefaultLayout';

// function Loading() {
//   return <div>Loading...</div>;
// }

// const Home = Loadable({
//   loader: () => import('./views/Home'),
//   loading: Loading,
// });
// const ExportList = Loadable({
//   loader: () => import('./views/ExportList'),
//   loading: Loading,
// });
// const About = Loadable({
//   loader: () => import('./views/About'),
//   loading: Loading,
// });
// const Join = Loadable({
//   loader: () => import('./views/Join'),
//   loading: Loading,
// });
// const News = Loadable({
//   loader: () => import('./views/News'),
//   loading: Loading,
// });
// const Updates = Loadable({
//   loader: () => import('./views/Updates'),
//   loading: Loading,
// });

// // https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
// const routes = [
//   { path: '/', name: 'Home', component: DefaultLayout, exact: true },
//   { path: '/home', name: 'Home', component: Home },
//   { path: '/about', name: 'About', component: About, exact: true },
//   { path: '/exportlist', name: 'ExportList', component: ExportList, exact: true },
//   { path: '/join', name: 'Join', component: Join, exact: true },
//   { path: '/news', name: 'News', component: News, exact: true },
//   { path: '/updates', name: 'Updates', component: Updates, exact: true },
// ];

export default routes;