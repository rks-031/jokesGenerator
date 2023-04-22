import React from "react";
import Jokes from "./Jokes.js";
import jokesData from "./JokesData.js";

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return (
      <Jokes key={joke.id} setup={joke.setup} punchline={joke.punchline} />
    );
  });
  return <div>{jokeElements}</div>;
}
