import Snowfall from "react-snowfall";
import Header from "./components/Header";
import "../src/styles/reset.scss";
import Editor from "./components/Editor";

const App = () => {
  return (
    <>
      <Header />
      <Snowfall />
      <Editor />
    </>
  );
};

export default App;
