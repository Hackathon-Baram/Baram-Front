import "../src/styles/reset.scss";
import Snowfall from "react-snowfall";
import Card from "./components/Card";
import Editor from "./components/Editor";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Card />
        <Editor />
        <Footer />
        <Snowfall snowflakeCount={1000} style={{ position: "fixed" }} />
      </div>
    </>
  );
};

export default App;
