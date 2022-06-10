function ItemDetail({ producto }) {

    return (
        <section className="row w-100">
            <div className="col-lg-6">
                <img src={producto.pictureUrl} className='img-fluid' alt="" />
            </div>
            <div className="col-lg-6">
                <div className="container h-75">
                    <div className="row h-100 justify-content-center text-center align-content-center">
                        <p>{producto.marca} {producto.title}</p>
                        <p>{producto.price}</p>
                        <p>{producto.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemDetail