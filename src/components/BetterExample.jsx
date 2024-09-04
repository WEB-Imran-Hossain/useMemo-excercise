import React, { useMemo, useState } from "react";

const BetterExample = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(5);

  // Expensive calculation function that simulates a time-consuming operation
  const expensiveCalculation = (number) => {
    console.log("Expensive calculation function called...");
    let finalValue = 0;
    // Simulating an expensive computation by looping
    for (let i = 0; i < 10000; i++) {
      finalValue = parseInt(number) - 1;
    }
    return finalValue;
  };

  //before useMemo write for use
  //   const finalValue = expensiveCalculation(count);

  // Use useMemo to memoize the result of the expensiveCalculation function
  // This prevents re-running the calculation unless 'count' changes
  const finalValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // Dependencies array - recalculates when 'count' changes

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">
          Learn <span className="text-indigo-600">useMemo</span> Hook
        </h1>
        <h3 className="text-xl font-medium mb-4 text-gray-700">
          Count Value: <span className="font-bold">{count}</span>
        </h3>
        <h3 className="text-xl font-medium mb-8 text-gray-700">
          Item Value: <span className="font-bold">{item}</span>
        </h3>

        <h3 className="text-xl font-medium mb-8 text-gray-700">
          Final Value: <span className="font-bold">{finalValue}</span>
        </h3>

        <div className="flex space-x-4">
          {/* Button to update the count value */}
          <button
            className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300"
            onClick={() => setCount(count + 1)}
          >
            Update Count
          </button>
          {/* Button to update the item value */}
          <button
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500 transition duration-300"
            onClick={() => setItem(item + 1)}
          >
            Update Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default BetterExample;
