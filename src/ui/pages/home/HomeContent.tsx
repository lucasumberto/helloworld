import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'
import heroImg from '../../../assets/hero.png'
import './Home.css'

function HomeContent() {

  const user = {
    name: "Lucas",
    age: 36,
    city: "Florianópolis"
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Olá {user.name}</h1>
        </div>
      </section>

    </>
  )
}

export default HomeContent
