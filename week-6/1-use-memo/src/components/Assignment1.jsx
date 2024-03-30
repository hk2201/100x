import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);
  // Your solution starts here
  console.log("start");

  // Your solution ends here
  const val = useMemo(() => {
    var expensiveValue = 1;
    for (let i = 1; i <= input; i++) {
      expensiveValue *= i;
    }

    return expensiveValue;
  }, [input]);

  console.log("start");

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {val}</p>
    </div>
  );
}
