import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import './views/widgets/hero-bar';
import './views/widgets/resto-list-element';
import './views/widgets/resto-detail-element';
import './views/widgets/menu-button';
import './views/widgets/menu-list';
import {
    createFooter,
    createMenuButton,
    createMenuList,
    createMenuTitle,
    createNavBar,
} from './views/templates/template-creator';
import CONFIG from './globals/config';

const headerPlaceholder = document.querySelector('header');
const mainPlaceholder = document.querySelector('main');
const footerPlaceholder = document.querySelector('footer');

const menuTitle = createMenuTitle();
const menuButton = createMenuButton();
const menuList = createMenuList(CONFIG.MENU_ITEMS);
headerPlaceholder.appendChild(createNavBar(menuTitle, menuButton, menuList));
footerPlaceholder.innerHTML = createFooter();

const app = new App({
    button: menuButton,
    drawer: menuList,
    content: mainPlaceholder,
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});
