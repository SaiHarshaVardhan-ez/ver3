import React, { useState } from 'react';
import Structures from './featureComponents/Structures';
import Body from './featureComponents/Body';
import Inputs from './featureComponents/Inputs';

const Features = () => {
  const [opened, setOpened] = useState("inputs");

  return (
    <>
      <div>
        <button onClick={() => setOpened("inputs")}>Inputs</button>
        <button onClick={() => setOpened("structure")}>Structure</button>
        <button onClick={() => setOpened("body")}>Body</button>
      </div>

      {opened === "inputs" ? (
        <div>
          <h2>Inputs</h2>
          <p>This is the inputs section.</p>
          <Inputs/>
        </div>
      ) : opened === "structure" ? (
        <div>
          <h2>Structures</h2>
          <p>This is the structures section.</p>
          <Structures/>
        </div>
      ) : opened === "body" ? (
        <div>
          <h2>body</h2>
          <p>This is the body section.</p>
          <Body/>
        </div>
      ) : null}
    </>
  );
}

export default Features;
