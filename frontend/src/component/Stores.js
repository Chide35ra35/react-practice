import { useState } from "react"

export default function Stores() {
    const [product, setProducts] = useState("")

    return <>
        <h1 className="text-center mt-5">Stores</h1>
        <form className="budget-header form d-flex m-5 p-4 border border-danger rounded">
            <input type="text" className="form-control py-4 fs-5 me-3" placeholder="Enter movie title" />
            <button className="form-control btn btn-danger fs-5">Search</button>
        </form>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card mb-2" style={{ width: "18rem" }}>
                        <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/spiderman-homecoming-donald-glover-miles-morales.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
                            class="card-img-top" alt="..." style={{ height: "11rem" }} />
                        <div class="card-body">
                            <h5 class="card-title text-center">See</h5>
                            <p class="card-text text-center">2019 movie</p>
                            <a href="#" class="btn btn-danger w-100">see details</a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col">
                <div class="card mb-2" style={{ width: "18rem" }}>
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/spiderman-homecoming-donald-glover-miles-morales.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
                        class="card-img-top" alt="..." style={{ height: "11rem" }} />
                    <div class="card-body">
                        <h5 class="card-title text-center">See</h5>
                        <p class="card-text text-center">2019 movie</p>
                        <a href="#" class="btn btn-danger w-100">see details</a>
                    </div>
                </div>

            </div>
            <div className="col">
                <div class="card mb-2" style={{ width: "18rem" }}>
                    <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2023/03/spiderman-homecoming-donald-glover-miles-morales.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
                        class="card-img-top" alt="..." style={{ height: "11rem" }} />
                    <div class="card-body">
                        <h5 class="card-title text-center">See</h5>
                        <p class="card-text text-center">2019 movie</p>
                        <a href="#" class="btn btn-danger w-100">see details</a>
                    </div>
                </div>

            </div>
        </div>
    </>

}