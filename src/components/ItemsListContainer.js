import './ItemsListContainer.css';
import ItemList from './ItemList.js'
import {useState, useEffect} from 'react';
import products from '../utilities/products.js';
import promesa from '../utilities/promesa.js'

function ItemsListContainer(){
  const [items, setItems] = useState([]);

  useEffect(() => {
       promesa(2000, products)
       .then(res => setItems(res));
   }, [items]);

return (
      <ItemList productos = {items}/>
  );
}

export default ItemsListContainer;
