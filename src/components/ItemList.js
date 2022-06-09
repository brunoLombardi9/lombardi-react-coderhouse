import Item from './Item.js';

function ItemList({productos}){

const articulos =productos.map(producto => {
  return(<Item key={producto.id} brand= {producto.brand} title= {producto.title} price= {producto.price} pictureUrl= {producto.pictureUrl}/>);
});
return articulos;
}

export default ItemList;
