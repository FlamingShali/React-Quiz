const FinishScreen = ({ points, maxPossiblePoints, highScore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  console.log(percentage);
  if (percentage === 100) emoji = "❤️";
  if (percentage >= 80) emoji = "😍";
  if (percentage >= 60) emoji = "😊";
  if (percentage < 60) emoji = "😒";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
