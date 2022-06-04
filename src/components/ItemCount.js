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
  <div className="col-lg-3 col-sm-4 bg-light card m-3 pb-3">
    <p className='text-center h3 mt-3'>{contador}</p>
    <div className="d-flex justify-content-center gap-5 mb-3">
      <button className="btn btn-primary mt-auto sumarRestarBotones" onClick={restar}>-</button>
      <button className="btn btn-primary mt-auto sumarRestarBotones" onClick={sumar}>+</button>
    </div>
    <button className="btn btn-success mt-auto">Confirmar</button>
  </div>
  );
}

export default ItemCount;
