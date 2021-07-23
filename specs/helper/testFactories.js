import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createlikeButtonContainer = async (resto) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        resto,
    });
  };
   
export { createlikeButtonContainer };