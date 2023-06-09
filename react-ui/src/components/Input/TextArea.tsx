import './TextArea.scss';

function TextArea() {


  return (
    <div>
      <label htmlFor="description">Description du produit</label>
      <textarea autoCapitalize="sentences" spellCheck required></textarea>
  
    </div>
  );
}

export default TextArea;
