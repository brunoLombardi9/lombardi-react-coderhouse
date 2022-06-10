import ItemCount from './ItemCount.js'

function Item({id, brand, title, price, pictureUrl}){
  return(
    <div key={id} className="col-lg-3 col-sm-4 bg-light card m-3">
    <img src={pictureUrl} className="img-fluid mt-2" alt="imagenProducto"/>
    <h2 className="text-center">{brand} {title}</h2>
    <h3 className="text-center mt-auto">{price}</h3>
    <ItemCount initial ={1} stock = {5}/>
    <button className="btn btn-primary mt-auto">Agregar al carrito</button>
    </div>
  );
}

export default Item;
