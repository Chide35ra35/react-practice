import { useState } from "react"

export default function Market(){
    const[market,setMarkets]= useState([])
    return<>
    <h1 className="market">3d market</h1>
    <form action="" className="form">
        <input type="text" className=" form-control m-3 me-4 w-100 py-3 px-2 fs-5" placeholder="search items"/>
        


    </form>

    </>
}