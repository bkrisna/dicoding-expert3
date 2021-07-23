Feature('Liking Resto');

Scenario('test something', ({ I }) => {
    I.amOnPage('/#/fav');
});

Scenario('showing empty liked resto', ({ I }) => {
    I.seeElement('resto-list');
    I.see('Tidak ada resto untuk ditampilkan', '.resto-not-found');
});
