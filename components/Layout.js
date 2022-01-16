import NavBar from './NavBar'

export default function Layout ({ children }) {
  return (
    <div>
      <NavBar />
      {children}

      <style jsx>{`
        div {
          max-width: 400px;
          min-height: 100vh;
          height: 100%;
          margin: 0 auto;
          background-color: #f1f2f6;
        }
      `}</style>
    </div>
  )
}
