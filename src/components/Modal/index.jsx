import "./modal.scss";

const Modal = ({ no, yes, text }) => {
  return (
    <div className="ModalBackground">
      <div className="Modal">
        <div className="Modal-Text">{text}</div>
        <div className="Modal-Button">
          <div className="Modal-Button-Yes" onClick={() => yes()}>
            계속해 주세요
          </div>
          <div className="Modal-Button-No" onClick={() => no()}>
            생각해 볼래요
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
