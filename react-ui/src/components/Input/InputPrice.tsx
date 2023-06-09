import './InputPrice.scss';

function InputPrice() {

  return (
    <div id="input-price-container">
      <label htmlFor="story">Quel est son prix ?</label>
      <div>
        <input type="number" min="1" step=".10" />
        <span>€</span>
      </div>
    </div>
  );
}

export default InputPrice;
