import Joke from "./Joke.jsx";

function Jokes(props) {
  return (
    <div className="jokes">
      {props.jokes.map((j, i) => (
        <Joke
          key={i}
          joke={j.joke}
          type={j.type}
          setup={j.setup}
          delivery={j.delivery}
          id={i}
        />
      ))}
    </div>
  );
}

export default Jokes;
