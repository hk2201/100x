import { useState } from "react";

export default function Colors() {
  const col = ["Red", "Yellow", "Black", "Purple", "Green", "Blue"];
  const [color, setColor] = useState("white");
  return (
    <div style={{ background: color, minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {col.map((i) => {
          return (
            <button
              style={{ backgroundColor: i, color: "orange", cursor: "pointer" }}
              onClick={() => {
                setColor(i);
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
    </div>
  );
}
