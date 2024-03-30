import { useCallback, useState, memo } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  console.log("Hither");
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);
  // Your code ends here
  console.log("End There");

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <>
    <div>
      <button
        onClick={onIncrement}
        style={{ display: "block", marginBottom: "10px" }}
      >
        Increment
      </button>
    </div>
    <div>
      <button onClick={onDecrement} style={{ display: "block" }}>
        Decrement
      </button>
    </div>
  </>
));
