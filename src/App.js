import "./App.css";

import NavBar from "./component/NavBar";
import TextForm from "./component/TextForm";
function App() {
  return (
    <>
      <NavBar />
      <div className="container my-3">
        <TextForm heading="Enter the text to Analize" />
      </div>
    </>
  );
}

export default App;
