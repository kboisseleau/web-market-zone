
import './Input.scss';

function Input({title} : {title: string}) {
  return (
    <div className="container-input">
      <label htmlFor="title">{title}</label>
      <input type="text" id="title" name="title" required />
    </div>
  );
}

export default Input;
