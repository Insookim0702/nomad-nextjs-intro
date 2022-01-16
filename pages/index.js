import { useEffect, useState } from 'react'
import Seo from './Seo'

function fetchMovieList () {
  return fetch('api/movies').then(resolve => resolve.json())
}

export default function Index ({ results }) {
  return (
    <div className='gContainer'>
      <h1>Movie Popular List</h1>
      <div className='movie-container'>
        <Seo title='Home' />
        {results.map(movie => {
          return (
            <div key={movie.id} className='movieBox'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <p>{movie.title}</p>
            </div>
          )
        })}
      </div>
      )
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
            padding: 0 20px;
            margin: 30px 0;
            text-align: center;
          }
        `}
      </style>
    </div>
  )
}

export async function getServerSideProps () {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json()
  return { props: { results } }
}
