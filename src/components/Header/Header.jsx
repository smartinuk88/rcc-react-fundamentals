import "./Header.css";
import reactImg from "../../assets/react-core-concepts.png";

function Header() {
  const reactDescriptions = ["Core", "Fundamental", "Crucial"];

  const genRandomInt = (max) => Math.floor(Math.random() * (max + 1));

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

export default Header;
