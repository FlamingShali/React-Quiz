import Buttons from "./Buttons";
const Question = ({ question, dispatch, answer }) => {
  console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>

      <Buttons question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
