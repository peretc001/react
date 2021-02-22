const URI = 'https://krasovsky23.ru/api/';

export default {

    async fetchPromo() {
        return fetch(URI + '/promo.php')
            .then((response) => response.json())
            .then((json) => json)
            .catch((e) => console.log(e))
    },

    async fetchProducts() {
        return fetch(URI + '/products.php')
            .then((response) => response.json())
            .then((json) => json)
            .catch((e) => console.log(e))
    }
}