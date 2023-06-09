import Input from '../components/Input/Input';
import InputImg from '../components/Input/InputImg';
import InputPrice from '../components/Input/InputPrice';
import TextArea from '../components/Input/TextArea';
import './AddProduct.scss';

function AddProduct() {


  return (
    /* make component reusable with props etc and improve code loop when necessary
    save data send by form, wrap with form */
    <div id="add-product-content">
      <Input title="Quel est le titre de l'annonce ?" />
      <InputImg />
      <TextArea />
      <InputPrice />
    </div>
  );
}

export default AddProduct;
