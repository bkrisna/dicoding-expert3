import FavRestoIdb from '../src/scripts/data/favresto-idb';
import * as TestFactories from './helper/testFactories';

describe('Liking a Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(async () => {
        addLikeButtonContainer();
        await FavRestoIdb.putResto({ id: 1 });
    });

    afterEach(async () => {
        await FavRestoIdb.deleteResto(1);
    });

    it('should display unlike widget when the resto has been liked', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
        .toBeTruthy();
    });

    it('should not display like widget when the resto has been liked', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        expect(document.querySelector('[aria-label="like this restaurant"]'))
        .toBeFalsy();
    });

    it('should be able to remove liked resto from the list', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavRestoIdb.getAllRestos()).toEqual([]);
    });

    it('should not throw error if the unliked movie is not in the list', async () => {
        await TestFactories.createlikeButtonContainer({id: 1});
        await FavRestoIdb.deleteResto(1);
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));
        expect(await FavRestoIdb.getAllRestos()).toEqual([]);
    });
});