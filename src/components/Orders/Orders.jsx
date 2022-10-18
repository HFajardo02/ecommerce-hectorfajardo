import { Link } from "react-router-dom"


const Orders = () => {
    return (
        <>
            <h2 className="my-5 text-center">Gracias por tu compra!!!</h2>
            <div className="container text-center">
                <Link to="/">
                    <button className="btn btn-primary mt-5">Volver a la tienda</button>
                </Link>
            </div>
        </>
    )
}



export default Orders