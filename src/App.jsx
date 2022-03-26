import React from "react";
import "App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen v-screen">
      <h1 className="text-2xl font-bold my-4">Hello React via ESBuild</h1>
      <hr className="w-96 my-8" />
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
      <hr className="w-96 my-8" />
      <span>{count} clicks so far</span>
    </div>
  );
}

export default App;
