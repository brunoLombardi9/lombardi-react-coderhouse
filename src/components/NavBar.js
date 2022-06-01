import './NavBar.css';
import CartWidget from'./CartWidget.js';

function NavBar(prop){
  if(prop.ubicacion === 'arriba'){
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Emprendimiento</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto secciones">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sección 1</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sección 2</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Sección 3</a>
            </li>

          </ul>

         <CartWidget/>
        </div>
      </div>
    </nav>
    </header>
  )
}else if(prop.ubicacion === 'abajo'){
  return (
  <footer>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center">
      <p className="text-white ">Soy footer</p>
    </nav>
  </footer>
    );
  }
}

export default NavBar;
