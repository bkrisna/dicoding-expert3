class MenuButton extends HTMLButtonElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const buttonClass = this.hasAttribute('buttonItemClass') ? this.getAttribute('buttonItemClass') : '';
        for (let i=0; i< 3; i++) {
            const buttonBar = document.createElement('span');
            buttonBar.setAttribute('class', buttonClass);
            this.appendChild(buttonBar);
        }
    }
};

customElements.define('menu-button', MenuButton, {extends: 'button'});
