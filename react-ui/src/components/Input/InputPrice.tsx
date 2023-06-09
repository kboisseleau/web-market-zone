import './InputPrice.scss';

function InputPrice() {


  return (
    <div >
      <input type="number" min="1" step=".10" />€
      <p></p>

    </div>
  );
}

export default InputPrice;
