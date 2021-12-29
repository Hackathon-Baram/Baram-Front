import "./card.scss";
import CardTitle from "../CardTitle";
import { useRecoilState } from "recoil";
import { orderAtom } from "../../atom/atom";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as FillHeart } from "../../assets/heart-fill.svg";

const Card = () => {
  const [order, setOrder] = useRecoilState(orderAtom);
  const dumi = [
    { idx: 0, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 1, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 2, text: "아니, 기숙사 아침운동 없애버려 주세요." },
    { idx: 3, text: "아니, 기숙사 아침운동 없애버려 주세요." },
  ];

  const CardItem = dumi.map((item) => (
    <div className="CardWrapper" key={item.idx}>
      <div className="CardWrapper-Card">
        <div className="CardWrapper-Card-Heart">
          <Heart />
        </div>
        <div className="CardWrapper-Card-Text">{item.text}</div>
      </div>
      {Math.round(item.idx / 2) % 2 ? (
        <div
          className="CardWrapper-Bottom"
          style={{ backgroundColor: "#8170FA" }}
        />
      ) : (
        <div
          className="CardWrapper-Bottom"
          style={{ backgroundColor: "#87b9e7" }}
        />
      )}
    </div>
  ));

  return (
    <div className="CardWrap">
      <CardTitle />
      <div className="Cards">{CardItem}</div>
    </div>
  );
};

export default Card;
