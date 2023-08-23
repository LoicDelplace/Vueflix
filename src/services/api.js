import { $fetch } from 'ohmyfetch';

const api = $fetch.create({ baseURL: 'http://localhost:3000'});

export const getMovies = async(nbMovies) => {
    if(nbMovies !== undefined) {
        return api('/movies?_limit='+nbMovies)
    }
    else {
        return api('/movies');
    }
}

export const countMovies = async() => {
    getMovies().then((response) => response.length)
}