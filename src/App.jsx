import { useState } from "react";

import Change from "./Change";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="div">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt=""
          width={"200px"}
        />

        <Change />
      </div>
    </>
  );
}

export default App;
