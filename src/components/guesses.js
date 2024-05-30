function Guess(props) {
  const similarity = props.similarity;
  const word = props.word;

  function calcColor() {
    if (similarity < 30) {
      return "#ba3e00";
    }
    if (similarity < 70) {
      return "#0580f2";
    }
    return "#14ba25";
  }

  return (
    <div className="guess">
      <div className="textcontainer">
        <h1>{word}</h1>
      </div>
      <space></space>
      <div className="similarity_bar">
        <div className="background_bar"></div>
        <div
          className="progress_bar"
          style={{
            position: "absolute",
            left: "55%",
            width: 40 * (similarity / 100) + "%",
            display: "flex",
            height: "15px",
            borderRadius: "20px",
            backgroundColor: calcColor(),
            marginTop: "35px",
            borderStyle: "solid",
            borderWidth: "1px",
          }}
        ></div>
        <h1 style = {{position: "absolute", left: "75%", fontSize: "20px", marginTop: "5px", color: calcColor(), fontWeight: "1000"}}>{similarity + "%"}</h1>
      </div>
    </div>
  );
}

export default Guess;
