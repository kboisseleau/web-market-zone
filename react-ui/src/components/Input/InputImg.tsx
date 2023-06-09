

import { useState } from 'react';
import {FcAddImage} from 'react-icons/fc'
import './InputImg.scss';

function InputImg() {
  const [images, setImages] = useState([])

  const test = (e: any) => {
    console.log(e.target.files)
    setImages(e.target.files)
    const output = document.getElementById('output') as HTMLImageElement;
    [...e.target.files].forEach(el => {
      console.log(el)
      
    });
    if (output !== null) {
      output.src = URL.createObjectURL(e.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src)
      }
    }
  }
  return (
    <div id="input-img-content">
      <p id="input-img-title">Ajouter une image </p>
      <div id="img-container">
        <label  className="label-file" htmlFor="file"><FcAddImage size="150px" /></label>
        <input className="input-file" onChange={test} type="file" id="file" accept="image/png, image/jpeg" multiple />
        <img id="output" src="" />
        <img className="img-test" src="https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
        <img className="img-test" src="http://placekitten.com/200/300" />
        <img className="img-test" src="http://placekitten.com/200/300" />
      </div>
  </div>
  );
}

export default InputImg;
