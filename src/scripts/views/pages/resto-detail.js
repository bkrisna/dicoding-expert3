import UrlParser from '../../routes/url-parser';
import RestoApiSource from '../../data/restoapi-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const RestoDetail = {
    async render() {
        return `
            <resto-detail></resto-detail>
            <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestoApiSource.detailResto(url.id);
        const detailItems = document.querySelector('resto-detail');
        detailItems.resto = resto;

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            resto: {
                id: resto.id,
                name: resto.name,
                address: resto.address,
                city: resto.city,
                pictureId: resto.pictureId,
                rating: resto.rating,
                description: resto.description,
            },
        });
    },
};

export default RestoDetail;
