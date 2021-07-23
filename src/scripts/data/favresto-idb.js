import {openDB} from 'idb';
import CONFIG from '../globals/config';

const dbPromise = openDB(CONFIG.DB_NAME, CONFIG.DB_VER, {
    upgrade(database) {
        database.createObjectStore(CONFIG.OBJ_STORE_NAME, {keyPath: 'id'});
    },
});

const FavRestoIdb = {
    async getResto(id) {
        return (await dbPromise).get(CONFIG.OBJ_STORE_NAME, id);
    },

    async getAllRestos() {
        return (await dbPromise).getAll(CONFIG.OBJ_STORE_NAME);
    },

    async putResto(resto) {
        return (await dbPromise).put(CONFIG.OBJ_STORE_NAME, resto);
    },

    async deleteResto(id) {
        return (await dbPromise).delete(CONFIG.OBJ_STORE_NAME, id);
    },
};

export default FavRestoIdb;
