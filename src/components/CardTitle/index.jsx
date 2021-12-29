import "./cardTitle.scss";
import { useRecoilState } from "recoil";
import { orderAtom } from "../../atom/atom";

const CardTitle = () => {
  const [order, setOrder] = useRecoilState(orderAtom);
  return (
    <div className="CardTitle">
      <span className="CardTitle-Title">
        우리들의 <span>바람.</span>
      </span>
      <span className="CardTitle-Order">
        {order ? (
          <span
            className="CardTitle-Order-new"
            onClick={() => setOrder(true)}
            style={{ color: "#72afe8" }}
          >
            최신순
          </span>
        ) : (
          <span
            className="CardTitle-Order-new"
            onClick={() => setOrder(true)}
            style={{ color: "#dddddd" }}
          >
            최신순
          </span>
        )}
        {order ? (
          <span
            className="CardTitle-Order-like"
            onClick={() => setOrder(false)}
            style={{ color: "#ddd" }}
          >
            인기순
          </span>
        ) : (
          <span
            className="CardTitle-Order-like"
            onClick={() => setOrder(false)}
            style={{ color: "#72afe8" }}
          >
            인기순
          </span>
        )}
      </span>
    </div>
  );
};

export default CardTitle;
