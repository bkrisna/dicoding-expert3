import FavRestoIdb from '../src/scripts/data/favresto-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking a Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    it('should show the like button when the resto has not been liked before', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        expect(document.querySelector('[aria-label="like this restaurant"]'))
        .toBeTruthy();
    });

    it('should not show the unlike button when the resto has not been liked before', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
        .toBeFalsy();
    });

    it('should be able to like the resto', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const resto = await FavRestoIdb.getResto(1);
        expect(resto).toEqual({ id: 1 });
        FavRestoIdb.deleteResto(1);
    });

    it('should not add a resto again when its already liked', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});  
        await FavRestoIdb.putResto({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavRestoIdb.getAllRestos()).toEqual([{ id: 1 }]);
        FavRestoIdb.deleteResto(1);
    });

    it('should not add a resto when it has no id', async () => {
        await TestFactories.createlikeButtonContainer({});
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavRestoIdb.getAllRestos()).toEqual([]);
    });
});