import Snowfall from "react-snowfall";
import Header from "./components/Header";
import "../src/styles/reset.scss";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Snowfall />
      <Card />
    </div>
  );
};

export default App;
