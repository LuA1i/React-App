import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data.js'

const reactDecriptions = ['Fundemental', 'Crucial,', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDecriptions[getRandomInt(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title}></img>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConept {...CORE_CONCEPTS[0]} />
            <CoreConept {...CORE_CONCEPTS[1]} />
            <CoreConept {...CORE_CONCEPTS[2]} />
            <CoreConept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App
