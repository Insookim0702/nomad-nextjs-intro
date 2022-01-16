import Link from 'next/link'
import Seo from './Seo'

export default function Index ({ results }) {
  return (
    <div className='gContainer'>
      <Seo title='Home' />
      <h1>Movie Popular List</h1>
      <div className='movie-container'>
        {results.map(movie => {
          return (
            <Link key={movie.id} href={`/movies/${movie.title}/${movie.id}`}>
              <a>
                <div className='movieBox'>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  />
                  <p>{movie.title}</p>
                </div>
              </a>
            </Link>
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
            cursor: pointer;
          }

          img {
            width: 90%;
            border-radius: 20px;
            transition: all 0.5s;
          }
          img:hover {
            transition: all 0.5s;
            transform: translateY(-10px);
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
