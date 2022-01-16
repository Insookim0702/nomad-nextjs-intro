import Seo from '../Seo'

export default function Detail ({ movie, params }) {
  const [title] = params || []
  return (
    <div className='container'>
      <Seo title={title} />
      <h1>{title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}></img>
      <p>{movie.overview}</p>
      <style jsx>
        {`
          .container {
            padding: 10px;
          }
          img {
            width: 100%;
            height: 200px;
          }
        `}
      </style>
    </div>
  )
}

export async function getServerSideProps ({ params: { params } }) {
  const [title, id] = params
  const resp = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json()
  return {
    props: {
      params,
      movie: resp
    }
  }
}
