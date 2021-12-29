import "../src/styles/reset.scss";
import Snowfall from "react-snowfall";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "../src/styles/reset.scss";
import Editor from "./components/Editor";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Card />
      </div>
      <Footer />
      <Snowfall />
      <Editor />
    </>
  );
};

export default App;
