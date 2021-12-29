import '../Input/input.scss';

const Input = () => {
  return (
    <div className="Input">
      <textarea className="Input-wrap" placeholder='100자 이내로 입력해 주세요. &#13;&#10; ex) 급식에 치킨이 나왔으면 좋겠어요.' />
    </div>
  );
};
export default Input;