import { useState } from "react"

export default function Movie(){
    const [text,setText]= useState("")
    const [movies,setMovies]= useState([])
function submitHandler(e){
    e.preventDefault()
if(text.length < 3){
    alert("Movies Title at least 3 characters long")
        return; 
}

    fetch(`http://www.omdbapi.com/?s=${text}&apikey=5a322381`)
    .then(response=>response.json())
    .then(data=> setMovies(data.Search))
    .catch(err=> (err))

    return;
    
}
    return <>
    <h1 className="text-center mt-4">Movie</h1>
    <form onSubmit={submitHandler}  className="budget-header form d-flex flex-column m-5 p-4 border border-danger rounded ">
        <input onChange ={e=>setText(e.target.value)} className="  form-control py-3 me-3 mb-3 fs-5 " type="text" placeholder="Enter movie titile"/>
        <button className="btn btn-danger fs-5 ">Search</button>
    </form>
    <div className="container ">
            <div className="row">
                {movies.map(x => {
                    return <div className="col">
                        <div class="card mb" style={{ width: "18rem" }}>
                            <img src={x.Poster}
                                class="card-img-top" alt="..." style={{ height: "11rem" }} />
                            <div class="card-body" >
                                <h5 class="card-title text-center">{x.Title}</h5>
                                <p class="card-text text-center">{x.Year}</p>
                                <a href="#" class="btn btn-danger w-100">See details</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>

    </>
}