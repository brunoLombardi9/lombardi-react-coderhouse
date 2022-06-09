import './ItemsListContainer.css';
import ItemList from './ItemList.js'
import {useState, useEffect} from 'react';
import products from '../utilities/products.js';


const promesa = (tiempo, tarea) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(tarea);
    }, tiempo)
  });
}

function ItemsListContainer(){
  const [items, setItems] = useState([]);

  useEffect(() => {
       promesa(2000, products)
       .then(res => setItems(res))
   }, [items])

return (
    <main>
      <ItemList productos = {items}/>
    </main>
  );
}

export default ItemsListContainer;
