import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

const reactDescriptions = ["Core", "Fundamental", "Crucial"];

const genRandomInt = (max) => Math.floor(Math.random() * (max + 1));

function Header() {
  const description =
    reactDescriptions[genRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept({ image, description, title }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
