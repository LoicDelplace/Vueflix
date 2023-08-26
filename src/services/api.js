import { $fetch } from 'ohmyfetch'

const api = $fetch.create({ baseURL: 'http://localhost:3000' })

export const getMovies = async (page = 1, nbMovies = 5) => {
  return api(`/movies?_page=${page}&_limit=${nbMovies}`)
}

export const countMovies = async () => {
  return api('/movies/').then((response) => response.length)
}

export const getMovie = (id) => {
  return api(`/movies/${id}?_expand=genre&_expand=actors`)
}

// export const getComments = (id) => {
//   return api(`/movies/${id}/comments?_expand=user`)
// }

// export const postComment = (id, message) => {
//   return api(`/movies/${id}/comments`, {
//     method: 'POST',
//     body: { message, userId: 1}
//   })
// }

// const send = (event) => {
//   event.preventDefault()

// Ajoute le commentaire dans l'API puis récupère la liste des coms à jours.
//   postComment(movie.value.id, newComment.value.message)
//     .then(
//       () => getComments(movie.value.id).then((response) => (comments.value = response))
//     )
//     // .then(() => getComments(movie.value.id))
//     // .then((response) => (comments.value = response))
  

//   newComment.value.message = ''
// }