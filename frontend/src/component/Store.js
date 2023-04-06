import { useEffect, useState } from "react"

export default function Store() {
    const [products, setProducts] = useState([])

    function getProducts() {
        fetch("https://fakestoreapi.com/products/")
            .then(response => response.json())
            .then(data => setProducts(data))
    }
    // useEffect runs a function once the page is load and before components are rendered
    useEffect(() => {
        getProducts()
    }, [])
    return <>

        <h1 className="text-center mt-3">Store</h1>
        <form className="budget-header form d-flex m-5 p-4 border border-danger rounded">
         <input type="text" className="form-control py-4 fs-5 me-3" placeholder="Enter movie title" />
        </form>
        <div className="container">
            <div className="row">
                {products.map(x => {
                    return <div className="col">
                        <div class="card mb" style={{ width: "18rem" }}>
                            <img src={x.image}
                                class="card-img-top" alt="..." style={{ height: "11rem" }} />
                            <div class="card-body" >
                                <h5 class="card-title text-center">{x.title}</h5>
                                <p class="card-text text-center">${x.price}</p>
                                <a href="#" class="btn btn-danger w-100">See details</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </>



}