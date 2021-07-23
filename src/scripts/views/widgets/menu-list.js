class MenuList extends HTMLUListElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const navItemsClass = this.hasAttribute('navItemClass') ? this.getAttribute('navItemClass') : '';
        let navItems = this.hasAttribute('navItems') ? this.getAttribute('navItems') : '{}';
        navItems = JSON.parse(navItems);
        navItems.forEach((item) => {
            const navItemWrapper = document.createElement('li');
            navItemWrapper.setAttribute('class', navItemsClass);
            const navItemAnchor = document.createElement('a');
            navItemAnchor.setAttribute('href', item.link);
            navItemAnchor.innerHTML = `${item.name}`;
            navItemWrapper.appendChild(navItemAnchor);
            this.appendChild(navItemWrapper);
        });
    }
};

customElements.define('menu-list', MenuList, {extends: 'ul'});
