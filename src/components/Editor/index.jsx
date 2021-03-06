import '../Editor/editor.scss';
import Button from './Button/Button';
import Input from './Input/Input';
import Title from './Title/Title';

const Editor = () => {
  return (
    <div className='editor'>
      <Title />
      <Input />
      <Button />
    </div>
  );
};

export default Editor;