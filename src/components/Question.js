import Buttons from "./Buttons";
const Question = ({ question, dispatch, answer }) => {
  
  return (
    <div>
      <h4>{question.question}</h4>

      <Buttons question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
