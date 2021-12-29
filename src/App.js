import "../src/styles/reset.scss";
import Snowfall from "react-snowfall";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Card />
      </div>
      <Footer />
      <Snowfall />
    </>
  );
};

export default App;
