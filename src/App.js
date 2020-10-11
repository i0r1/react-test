import React, { useState } from "react";
import "./style.css";

const Child = () => {
  console.log('child');
  return <span>child</span>
}

const App = () => {
  const [test, setTest] = useState(false);
  return (
    <div>
      <button onClick={() => setTest(!test)}>click</button>
      <h1>Hello StackBlitz!</h1>
      <Child />
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}

export default App;