import {useState, useEffect} from 'react';
import products from '../utilities/products.js'
import ItemDetail from './ItemDetail.jsx';
import promesa from '../utilities/promesa.js';


function ItemDetailContainer(){
    const [item, setItem] = useState([]);

    useEffect(() => {
        promesa(2000, products)
        .then(res => setItem(res[1]))
    }, [item]);

     return (
         <>
          <ItemDetail producto= {item}/>
        </>
      );

}

export default ItemDetailContainer;