import './TextArea.scss';

function TextArea() {


  return (
    <div id="textarea-container">
      <label htmlFor="description">Description du produit</label>
      <textarea cols={8} rows={4} autoCapitalize="sentences" spellCheck required></textarea>
  
    </div>
  );
}

export default TextArea;
