import React, { useState } from "react";
import Structures from "./featureComponents/Structures";
import Body from "./featureComponents/Body";
import Inputs from "./featureComponents/Inputs";

const Features = () => {
  const [opened, setOpened] = useState("inputs");

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col gap-2 justify-center items-center text-center font-bold">
        <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpened("inputs")}
        >
          Inputs
        </button>
        <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-1 rounded"
          onClick={() => setOpened("structure")}
        >
          Structure
        </button>
        <button
          className="w-20 bg-purple-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setOpened("body")}
        >
          Body
        </button>
      </div>
      <div className="flex justify-center items-center text-center">
        <div className="border border-black rounded m-2 p-2 w-72 h-96 flex flex-col justify-center items-center text-center font-bold">
          {opened === "inputs" ? (
            <div>
              <h2>Inputs</h2>
              <p>This is the inputs section.</p>
              <Inputs />
            </div>
          ) : opened === "structure" ? (
            <div>
              <h2>Structures</h2>
              <p>This is the structures section.</p>
              <Structures />
            </div>
          ) : opened === "body" ? (
            <div>
              <h2>Body</h2>
              <p>This is the body section.</p>
              <Body />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Features;
