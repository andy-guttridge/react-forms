import "./App.css";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import SearchBar from "./components/SearchBar";
import ControlledFormHooks from "./components/ControlledFormHooks";

function App() {
  return <div className="App">
      {/* <ControlledForm />
      <UncontrolledForm />
      <SearchBar /> */}
      <ControlledFormHooks />
  </div>;
}

export default App;
