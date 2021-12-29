import "./cardTitle.scss";
import { useRecoilState } from "recoil";
import { orderAtom } from "../../atom/atom";

const CardTitle = () => {
  const [order, setOrder] = useRecoilState(orderAtom);

  const onClickNew = () => {
    setOrder(true);
  };

  const onClickLike = () => {
    setOrder(false);
  };

  return (
    <div className="CardTitle">
      <span className="CardTitle-Title">
        우리들의 <span>바람.</span>
      </span>
      <span className="CardTitle-Order">
        {/* {order ? (
          <span
            className="CardTitle-Order-new"
            onClick={() => onClickNew()}
            style={{ color: "#72afe8" }}
          >
            최신순
          </span>
        ) : (
          <span
            className="CardTitle-Order-new"
            onClick={() => onClickNew()}
            style={{ color: "#dddddd" }}
          >
            최신순
          </span>
        )}
        {order ? (
          <span
            className="CardTitle-Order-like"
            onClick={() => onClickLike()}
            style={{ color: "#ddd" }}
          >
            인기순
          </span>
        ) : (
          <span
            className="CardTitle-Order-like"
            onClick={() => onClickLike()}
            style={{ color: "#72afe8" }}
          >
            인기순
          </span>
        )} */}
      </span>
    </div>
  );
};

export default CardTitle;
