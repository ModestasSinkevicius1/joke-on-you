import { useState } from "react";
import { useEffect } from "react";
import Jokes from "./Jokes.jsx";

function JokesFetch() {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then(
        (result) => {
          setJokes(result);
        },
        //catch
        (_) => {
          setJokes("error");
        }
      );
  }, []);

  const CheckStatus = () => {
    if (jokes === "error") return <h1>Failed to retrieve data</h1>;
    else if (jokes !== null) return <Jokes jokes={jokes.jokes} />;
    else return <h1>Please wait...</h1>;
  };

  return (
    <div className="jokes-fetch">
      <CheckStatus />
    </div>
  );
}

export default JokesFetch;
