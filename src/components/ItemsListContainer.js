import './ItemsListContainer.css';
import  ItemCount from './ItemCount.js';

function ItemsListContainer(){
return (
  <main>
    <ItemCount stock = {5} initial = {0} onAdd={()=>{}}/>
  </main>
  );
}

export default ItemsListContainer;
