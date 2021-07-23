import CONFIG from '../../globals/config';

const createMenuButton = () => {
    const menuButton = document.createElement('button', {is: 'menu-button'});
    menuButton.setAttribute('id', 'mobile-menu');
    menuButton.setAttribute('class', 'menu-toggle');
    menuButton.setAttribute('aria-label', 'Menu Button');
    menuButton.setAttribute('buttonItemClass', 'bar');
    return menuButton;
};

const createMenuTitle = () => {
    const menuTitle = document.createElement('div');
    menuTitle.setAttribute('class', 'logo');
    menuTitle.innerHTML = `${CONFIG.APP_NAME}`;
    return menuTitle;
};

const createMenuList = (list) => {
    const menuList = document.createElement('ul', {is: 'menu-list'});
    menuList.setAttribute('class', 'nav-list');
    menuList.setAttribute('id', 'nav-list');
    menuList.setAttribute('navItemClass', 'nav-item');
    menuList.setAttribute('navItems', JSON.stringify(list));
    return menuList;
};

const createNavBar = (navTitle, navButton, navLink) => {
    const navBar = document.createElement('nav');
    navBar.setAttribute('class', 'navbar');
    navBar.appendChild(navTitle);
    navBar.appendChild(navButton);
    navBar.appendChild(navLink);
    return navBar;
};

const createFooter = () => `<p>Copyright &copy; 2021 - #MyRestoCatalogue</p>`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createMenuTitle,
    createMenuButton,
    createMenuList,
    createNavBar,
    createFooter,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
