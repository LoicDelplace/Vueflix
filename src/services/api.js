import { $fetch } from 'ohmyfetch';

const api = $fetch.create({
    baseURL: "https://api.vueflix.boxydev.com/"
});

export const getMovies = async() => {
    return api('/movies');
}