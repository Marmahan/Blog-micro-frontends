// root-application/single-spa.config.js

import {registerApplication, start} from 'single-spa';

registerApplication('navBar', () => import ('./src/navBar/navBar.app.js').then( module => module.navBar), () => true);
registerApplication('home', () => import('./src/home/home.app.js'), () => location.pathname === "" || location.pathname === "/" || location.pathname.startsWith('/home'));
registerApplication('contactus', () => import('./src/contactus/contactus.app.js'), () =>  location.pathname.startsWith('/contactus'));
registerApplication('about', () => import('./src/about/about.app.js'), () =>  location.pathname.startsWith('/about'));

start();