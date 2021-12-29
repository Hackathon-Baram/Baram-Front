import "./card.scss";
import axios from "axios";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import CardTitle from "../CardTitle";
import Portal from "../Modal/Portal";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { modalAtom, postAtom } from "../../atom/atom";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { ReactComponent as FillHeart } from "../../assets/heart-fill.svg";

const Card = () => {
  const [id, setId] = useState();
  const [posts, setPosts] = useRecoilState(postAtom);
  const [openModal, setOpenModal] = useRecoilState(modalAtom);

  const getPost = async () => {
    try {
      const { data } = await axios.get(`http://172.20.10.8:8080/post`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      const t = data.data.sort((a, b) => {
        return b.idx - a.idx;
      });
      setPosts(t);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const like = async (idx) => {
    try {
      await axios.post("http://172.20.10.8:8080/like", {
        author: localStorage.getItem("ID"),
        idx,
      });
      await getPost();
      setOpenModal(false);
      toast("동의했어요 😊", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (e) {
      if (e.response.status === 400) {
        toast("이미 좋아요를 눌렀어요 😥", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const checkLike = (likeArray, id) => {
    let f = false;
    likeArray &&
      likeArray.map((item) => {
        if (item.author === id) {
          f = true;
        }
      });
    return f;
  };

  const CardItem = posts.map((item) => (
    <div className="CardWrapper" key={item.idx}>
      <div className="CardWrapper-Card">
        <div className="CardWrapper-Card-Heart">
          <span className="CardWrapper-Card-Heart-Count">
            {item.likeEntities.length}
          </span>
          {checkLike(item.likeEntities, localStorage.getItem("ID")) ? (
            <FillHeart />
          ) : (
            <Heart
              onClick={() => {
                setOpenModal(true);
                setId(item.idx);
              }}
            />
          )}
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
    <>
      <div className="CardWrap">
        <CardTitle />
        <div className="Cards">{CardItem}</div>
      </div>
      {openModal && (
        <Portal>
          <Modal
            text="의견에 동의 할 경우, 다시 취소할 수 없어요!"
            no={() => setOpenModal(false)}
            yes={() => like(id)}
          />
        </Portal>
      )}
    </>
  );
};

export default Card;
