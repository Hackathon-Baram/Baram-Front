import "./card.scss";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as FillHeart } from "../../assets/heart-fill.svg";

const Card = () => {
  const dumi = [
    { idx: 1, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 2, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 3, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 4, text: "아니, 기숙사 아침운동 없애버려 주세요." },
  ];

  const CardItem = dumi.map((item) => (
    <div className="CardWrapper">
      <div className="CardWrapper-Card">
        <div className="CardWrapper-Card-Heart">
          <Heart />
        </div>
        <div className="CardWrapper-Card-Text">{item.text}</div>
      </div>
      {item.idx % 2 === 0 ? (
        <div
          className="CardWrapper-Bottom"
          style={{ backgroundColor: "#87b9e7" }}
        />
      ) : (
        <div
          className="CardWrapper-Bottom"
          style={{ backgroundColor: "#8170FA" }}
        />
      )}
    </div>
  ));

  return <div className="Cards">{CardItem}</div>;
};

export default Card;
