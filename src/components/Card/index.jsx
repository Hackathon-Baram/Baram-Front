import "./card.scss";
import axios from "axios";
import { useEffect } from "react";
import CardTitle from "../CardTitle";
import { useRecoilState } from "recoil";
import { orderAtom } from "../../atom/atom";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as FillHeart } from "../../assets/heart-fill.svg";

const Card = () => {
  const [order, setOrder] = useRecoilState(orderAtom);

  const getPost = async () => {
    try {
      const { data } = await axios.get(`http://172.20.10.8:8080/post`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const dumi = [
    {
      idx: 1,
      content: "아니, 기숙사 아침운동 없애버려 주세요.",
      likeEntities: [{ idx: "1", author: "asdf" }],
    },
    {
      idx: 2,
      content: "아니, 기숙사 아침운동 없애버려 주세요.",
      likeEntities: [{ idx: "2", author: "asdf" }],
    },
    {
      idx: 3,
      content: "아니, 기숙사 아침운동 없애버려 주세요.",
      likeEntities: [{ idx: "3", author: "asdf" }],
    },
    {
      idx: 4,
      content: "아니, 기숙사 아침운동 없애버려 주세요.",
      likeEntities: [{ idx: "4", author: "asdf" }],
    },
  ];

  const CardItem = dumi.map((item) => (
    <div className="CardWrapper" key={item.idx}>
      <div className="CardWrapper-Card">
        <div className="CardWrapper-Card-Heart">
          <span className="CardWrapper-Card-Heart-Count">
            {item.likeEntities.length}
          </span>
          <Heart />
        </div>
        <div className="CardWrapper-Card-Text">{item.content}</div>
      </div>
      {Math.round((item.idx - 1) / 2) % 2 ? (
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
