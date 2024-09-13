const Progress = ({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
  answer,
}) => {
  return (
    <div>
      <header className="progress">
        <progress max={numQuestion} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong>/{numQuestion}
        </p>
        <p>
          <strong>
            {points}/ {maxPossiblePoints}
          </strong>
        </p>
      </header>
    </div>
  );
};

export default Progress;
