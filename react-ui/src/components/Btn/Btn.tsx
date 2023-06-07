import './Btn.scss';

function Btn({text} : {text: string}) {
  return (
    <button className="btn">
      {text}
    </button>
  );
}

export default Btn;
