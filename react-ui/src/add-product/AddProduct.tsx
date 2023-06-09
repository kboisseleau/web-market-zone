import Input from '../components/Input/Input';
import InputImg from '../components/Input/InputImg';
import InputPrice from '../components/Input/InputPrice';
import TextArea from '../components/Input/TextArea';
import './AddProduct.scss';

function AddProduct() {


  return (
    <div id="add-product-content">
      <Input title="Quel est le titre de l'annonce ?" />
      <InputImg />
      <TextArea />
      <InputPrice />
    </div>
  );
}

export default AddProduct;
