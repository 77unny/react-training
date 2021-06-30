import React from "react";
import tw from "tailwind-styled-components";
import Button from "./components/Button";

const Heading = tw.h1`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading children="Hello!!" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button label="버튼" />
    </div>
  );
}

export default App;
