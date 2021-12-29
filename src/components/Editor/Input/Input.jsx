import { useRecoilState } from 'recoil';
import { addPostContent } from '../../../atom/atom';
import '../Input/input.scss';

const Input = () => {
  const [postContent, setPostContent] = useRecoilState(addPostContent);
  const onChangeContent = e => {
    setPostContent(e.target.value);
  }

  return (
    <div className="Input">
      <textarea value={postContent} className="Input-wrap" onChange={onChangeContent}
        placeholder='100자 이내로 입력해 주세요. &#13;&#10; ex) 급식에 치킨이 나왔으면 좋겠어요.' />
    </div>
  );
};
export default Input;