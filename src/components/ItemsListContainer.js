import './ItemsListContainer.css'

function ItemsListContainer(prop){
return (
  <main>
    <p className="text-center h1">{prop.greeting}</p>
  </main>
  );
}

export default ItemsListContainer;
