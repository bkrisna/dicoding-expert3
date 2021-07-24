Feature('E2E Test liking and un-liking a Resto');

const assert = require('assert');

Before (({I}) => {
    I.amOnPage('/#/fav');
});

Scenario('show an empty fav resto list', ({I}) => {
    I.seeElement('resto-list');
    I.see('Tidak ada daftar resto untuk ditampilkan', '.resto-not-found');
});

Scenario('liking a resto', async ({I}) => {
    I.seeElement('resto-list');
    I.see('Tidak ada daftar resto untuk ditampilkan', '.resto-not-found');
    I.amOnPage('/');
    I.seeElement('.resto-item a');

    const firstRestoTitle = await I.grabTextFrom(locate('.resto-item .resto-title').first());

    I.click(locate('.resto-item a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/Fav');
    I.seeElement('.resto-item');

    const likedRestoTitle = await I.grabTextFrom('.resto-item .resto-title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);

});

Scenario('unliking a resto', async ({I}) => {
    I.seeElement('resto-list');
    I.see('Tidak ada daftar resto untuk ditampilkan', '.resto-not-found');
    I.amOnPage('/');
    I.seeElement('.resto-item a');

    const firstRestoTitle = await I.grabTextFrom(locate('.resto-item .resto-title').first());

    I.click(locate('.resto-item a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/Fav');
    I.seeElement('.resto-item');

    const likedRestoTitle = await I.grabTextFrom('.resto-item .resto-title');

    assert.strictEqual(firstRestoTitle, likedRestoTitle);

    I.click(locate('.resto-item a').first());
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/Fav');
    I.see('Tidak ada daftar resto untuk ditampilkan', '.resto-not-found');
});
