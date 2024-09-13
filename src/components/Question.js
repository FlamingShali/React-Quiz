import Button from "./Button";
const Question = ({ question }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option) => (
          <Button key={option} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Question;
