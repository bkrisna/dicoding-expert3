import FavRestoIdb from '../../data/favresto-idb';

const RestoFav = {
    async render() {
        return `
            <h2>Favourite</h2>
            <resto-list></resto-list>
        `;
    },

    async afterRender() {
        const restos = await FavRestoIdb.getAllRestos();
        const restoContainer = document.querySelector('resto-list');
        restoContainer.restos = restos;
    },
};

export default RestoFav;
