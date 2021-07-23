const CONFIG = {
    APP_NAME: '#MyRestoCatalogue',
    KEY: '12345',
    BASE_URL: 'https://restaurant-api.dicoding.dev',
    BASE_IMG_URL: 'https://restaurant-api.dicoding.dev/images',
    CACHE_NAME: 'MyRestoCatalogue-v1',
    DB_NAME: 'resto-catalogue-database',
    DB_VER: 1,
    OBJ_STORE_NAME: 'restos',
    IMG: {
        imgSmall: (picid) => `${CONFIG.BASE_IMG_URL}/small/${picid}`,
        imgMedium: (picid) => `${CONFIG.BASE_IMG_URL}/medium/${picid}`,
        imgLarge: (picid) => `${CONFIG.BASE_IMG_URL}/large/${picid}`,
    },
    MENU_ITEMS: [{
        name: 'Home',
        link: '#/list',
    }, {
        name: 'Favorite',
        link: '#/fav',
    }, {
        name: 'About Us',
        link: 'https://www.linkedin.com/in/bayu-krisnamurti-89080537',
    }],
};

export default CONFIG;
