const FinishScreen = ({ points, maxPossiblePoints, highScore }) => {
  const percentage = points / maxPossiblePoints;

  let emoji;

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
    </>
  );
};

export default FinishScreen;
