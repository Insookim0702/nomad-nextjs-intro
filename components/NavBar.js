import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavBar () {
  const router = useRouter()
  return (
    <nav>
      <Link href='/'>
        <a style={{ color: router.pathname === '/' ? 'red' : '' }}>Home</a>
      </Link>
      <Link href='/about'>
        <a style={{ color: router.pathname === '/about' ? 'red' : '' }}>
          About
        </a>
      </Link>
      <style jsx>{`
        nav {
          min-height: 50px;
          display: flex;
          align-items: center;
          /* box-shadow: 0 5px 2px gray; */
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          position: sticky;
          top: 0px;
          gap: 10px;
          padding: 10px;
          background-color: white;
        }
        a {
          font-size: 18px;
          font-weight: 600;
        }
      `}</style>
    </nav>
  )
}
