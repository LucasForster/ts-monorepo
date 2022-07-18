import React, { useState } from "react";
import { createRoot } from "react-dom/client";

import { test } from "../lib/test.js";

const Root: React.FC = () => {
  const [state, setState] = useState("");

  return (
    <>
      <h1>{test(state)}</h1>
      <input
        type="text"
        value={state}
        onChange={({ target: { value } }) => setState(value)}
      />
    </>
  );
};

const container = document.createElement("div");
document.body.appendChild(container);
createRoot(container).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
