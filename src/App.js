import Snowfall from "react-snowfall";
import Header from "./components/Header";
import "../src/styles/reset.scss";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Header />
      <Snowfall />
      <Card text={"아니, 기숙사 아침운동 없애버려 주세요."} />
    </>
  );
};

export default App;
