import logo from "./logo.svg";
import "./App.css";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button text={Intl.formatMessage({ id: "common.title.answer.yes" })} />
        <Button text={Intl.formatMessage({ id: "no" })} />
        <Button text={Intl.formatMessage({ id: "allooo" })} />
        <Button text={Intl.formatMessage({ id: "maybe" })} />
        <p>{Intl.formatMessage({ id: "editAndReload" })}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {Intl.formatMessage({ id: "moduleA.context1.yes" })}
        </a>
      </header>
    </div>
  );
}

export default App;
