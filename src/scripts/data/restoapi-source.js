import API_ENDPOINT from '../globals/api-endpoint';

class RestoApiSource {
    static async restoList() {
        const response = await fetch(API_ENDPOINT.RESTO_LIST);
        const responseJson = await response.json();
        return responseJson.restaurants;
    }

    static async detailResto(id) {
        const response = await fetch(API_ENDPOINT.resto_detail(id));
        const responseJson = await response.json();
        return responseJson.restaurant;
    }
}

export default RestoApiSource;
