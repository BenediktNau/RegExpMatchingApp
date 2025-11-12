import { useState } from "react";
import "./App.css";

function App() {
  const [regexpPattern, setRegexpPattern] = useState("");
  const [inputString, setInputString] = useState("");
  const [valid, setValid] = useState<boolean | null>(null);

  const onSubmit = () => {
    console.log("Submitted!");

    const regexp = new RegExp(regexpPattern);
    console.log("Testing regexp:", regexp, "against input:", inputString);
    const result = regexp.test(inputString);
    setValid(result);
  };

  return (
    <div className="flex flex-col  p-18 h-screen w-screen bg-gray-800 text-zinc-200">
      <h1 className="flex justify-center text-7xl font-simplifica">
        REGEXP Tester!
      </h1>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col space-y-3 mb-4 w-full">
          <label htmlFor="regexpin" className="ml-1 text-2xl">
            RegExp Pattern:
          </label>
          <input
            onChange={(e) => setRegexpPattern(e.target.value)}
            type="text"
            id="regexpin"
            name="name"
            required
            className="text-2xl w-full rounded-2xl p-2 bg-gray-600"
          ></input>
        </div>
        <div className="flex flex-col space-y-3 mb-4 w-full">
          <label htmlFor="regexpin" className="ml-1 text-2xl">
            Input:
          </label>
          <input
            onChange={(e) => setInputString(e.target.value)}
            type="text"
            id="regexpin"
            name="name"
            required
            className="text-2xl w-full rounded-2xl p-2 bg-gray-600"
          ></input>
        </div>
        <button
          onClick={onSubmit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl"
        >
          Test RegExp
        </button>
      </div>
      <div className="flex justify-center items-center h-20">
        {valid !== null && (
          <span
            className={`text-4xl font-bold ${
              valid ? "text-green-500" : "text-red-500"
            }`}
          >
            {valid ? "Match!" : "No Match!"}
          </span>
        )}
      </div>
    </div>
  );
}

export default App;
