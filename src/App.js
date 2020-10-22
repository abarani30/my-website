import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Tools from "./components/Tools";
import Stars from "./components/Stars";
import ContextAPI from "./ContextAPI";

function App() {
  return (
    <ContextAPI>
      <div className="MainComponent">
        <Stars />
        <div className="MainGrid">
          <Sidebar />
          <MainContent />
        </div>
        <Tools />
      </div>
    </ContextAPI>
  );
}

export default App;
