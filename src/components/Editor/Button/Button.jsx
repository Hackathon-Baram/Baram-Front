import axios from 'axios';
import { toast } from 'react-toastify';
import { useRecoilState, useRecoilValue } from 'recoil';
import { addPostContent } from '../../../atom/atom';
import '../Button/button.scss';

const Button = () => {
  const [postContent, setPostContent] = useRecoilState(addPostContent);

  const addPost = async () => {
    try {
      if (postContent === "") {
        toast.error('바람 등록 실패!', {
          position: 'top-right',
        });

        return;
      }

      const response = await axios.post(`http://172.20.10.8:8080/post`, {
        content: postContent,
      });

      if (response.data.status === 200) {
        toast('😎 바람 등록 성공!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      setPostContent("");
    } catch (error) {
      toast.error('바람 등록 실패!', {
        position: 'top-right',
      });
    }
  }

  return (
    <div className='Button'>
      <button className="Button-wrap" onClick={addPost} type='submit'>등록하기</button>
    </div>
  );
};

export default Button;