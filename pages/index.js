import { useEffect, useState } from 'react'
import Seo from './Seo'
const API_KEY = 'd277e1b4016230df2827711ffe3c7c59'
const BASE_URL = 'https://api.themoviedb.org/3'

function fetchMovieList () {
  return fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then(resolve => resolve.json())
}

export default function index () {
  const [count, setCount] = useState(0)
  const [movieList, setMovieList] = useState([])
  useEffect(async () => {
    const resp = await fetchMovieList()
    setMovieList(resp.results)
    console.log(resp.results)
  }, [])
  return (
    <div className='gContainer'>
      <h1>Movie Popular List</h1>
      <div className='movie-container'>
        <Seo title='Home' />
        {movieList.map(movie => {
          return (
            <div key={movie.id} className='movieBox'>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              />
              <p>{movie.title}</p>
            </div>
          )
        })}
      </div>
      <style jsx>
        {`
          h1 {
            padding: 10px;
          }

          .movie-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .movieBox {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          img {
            width: 90%;
            border-radius: 20px;
          }

          p {
            font-weight: 500;
          }
        `}
      </style>
    </div>
  )
}
