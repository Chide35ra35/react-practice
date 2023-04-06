import { useState } from "react";

export default function Netflix() {
    const [text, setText] = useState("")
    const[movies,setMovies]=useState([])
    



    return <>
    
        <h1 className="text-center mb ">Netflix</h1>
        <form action="" className=" budget-header form d-flex row flex-column m-5 p-5 border border-danger rounded ">
            <input type="text" className="form-control mb-3 me-3 py-4 px-2" placeholder="Enter movie name " />
            <button className="btn btn-outline-primary py-2 px-3">Enter</button>
        </form>

        <div className="container">
            <div className="row">
                <div className="col">
                <div class="card" style={{width:"18rem"}}>
                        <img src="..." class="card-img-top" alt="..." style={{height:"11rem"}}/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>


                </div>
                <div className="col">
                <div class="card" style={{width:"18rem"}}>
                        <img src="..." class="card-img-top" alt="..." style={{height:"11rem"}}/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>


                </div>
                <div className="col">
                <div class="card" style={{width:"18rem"}}>
                        <img src="..." class="card-img-top" alt="..." style={{height:"11rem"}}/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>


                </div>
                <div className="col">
                <div class="card" style={{width:"18rem"}}>
                        <img src="..." class="card-img-top" alt="..." style={{height:"11rem"}}/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                    </div>


                </div>
            </div>


        </div>


    </>


} 
