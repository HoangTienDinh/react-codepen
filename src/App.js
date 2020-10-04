import React, { useState } from "react";
import Editor from "./components/Editor";
function App() {
  const [html, setHtml] = useState("");

  return (
    <>
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml} />
        <Editor />
        <Editor />
      </div>
      <div className="pane"></div>
      <iframe
        title="output"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </>
  );
}

export default App;
