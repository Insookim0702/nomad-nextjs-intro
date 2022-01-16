const API_KEY = 'd277e1b4016230df2827711ffe3c7c59'
const BASE_URL = 'https://api.themoviedb.org/3'
module.exports = {
  reactStrictMode: true,
  async rewrites () {
    return [
      {
        source: '/api/movies',
        destination: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      },
      {
        source: '/api/movies/:id',
        destination: `${BASE_URL}/movie/:id?api_key=${API_KEY}&language=en-US&page=1`
      }
    ]
  }
}
