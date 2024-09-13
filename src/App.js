import Header from "./Header";
import Main from "./Main";
import { useReducer } from "react";
function reducer(type, action) {}

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
