import React, { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  return (
    <div>
      <h1>{value}</h1>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">enter</button>
      </form>
    </div>
  );
}
