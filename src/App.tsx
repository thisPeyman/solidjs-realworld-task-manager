import type { Component } from "solid-js";

import { Navbar } from "./components/navbar/Navbar";
import { Welcome } from "./pages/welcome/Welcome";

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Welcome />
    </>
  );
};

export default App;
