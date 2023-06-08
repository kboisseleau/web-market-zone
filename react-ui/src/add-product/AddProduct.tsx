
import { useState } from 'react';
import Input from '../components/Input/Input';
import {FcAddImage} from 'react-icons/fc'
import './AddProduct.scss';

function AddProduct() {
  const [images, setImages] = useState([])

  const test = (e: any) => {
    console.log(e.target.files)
    setImages(e.target.files)
    const output = document.getElementById('output') as HTMLImageElement;
    if (output !== null) {
      output.src = URL.createObjectURL(e.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src)
      }
    }
  }

  return (
    <div>
      <Input title="Quel est le titre de l'annonce ?" />
      <div>
        <p>Ajouter une image </p>
        <label  className="label-file" htmlFor="file"><FcAddImage size="5rem" /></label>
        <input className="input-file" onChange={test} type="file" id="file" accept="image/png, image/jpeg" multiple />
        <img id="output" src="" />
       
      </div>


    </div>
  );
}

export default AddProduct;
