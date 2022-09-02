function Joke(props) {
  console.log(props);
  return (
    <div className="joke">
      {props.type === "single" ? (
        <span>
          {props.id + 1}. {props.joke}
        </span>
      ) : (
        <div className="joke-sd">
          <span className="setup">
            {props.id + 1}. {props.setup}
          </span>
          <span className="hint">Hover mouse bellow to see answer</span>
          <span className="delivery">{props.delivery}</span>
        </div>
      )}
    </div>
  );
}

export default Joke;
