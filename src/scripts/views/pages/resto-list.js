import RestoApiSource from '../../data/restoapi-source';

const RestoList = {
    async render() {
        return `
            <hero-bar></hero-bar>
            <resto-list></resto-list>
        `;
    },

    async afterRender() {
        const restos = await RestoApiSource.restoList();
        const restoContainer = document.querySelector('resto-list');
        restoContainer.restos = restos;
    },
};

export default RestoList;
