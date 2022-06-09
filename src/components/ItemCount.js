import './ItemCount.css';
import {useState} from 'react';

function ItemCount({initial, stock, onAdd}){

const [contador, setContador] = useState(initial);

function restar(){
  if(contador > initial){
  setContador(contador - 1);
  }
}

function sumar(){
  if(contador < stock){
  setContador(contador + 1);
  }
}

return (
  <div className="d-flex justify-content-center">
    <div className="d-flex justify-content-center gap-3 mb-3">
      <button className="btn btn-primary mt-auto sumarRestarBotones" onClick={restar}>-</button>
      <p className='text-center h3 mt-3'>{contador}</p>
      <button className="btn btn-primary mt-auto sumarRestarBotones" onClick={sumar}>+</button>
    </div>
  </div>
  );
}

export default ItemCount;
