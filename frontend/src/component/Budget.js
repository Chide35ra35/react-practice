import { useState } from "react"

export default function Budget() {
    //create useStates for the budget item, price and items
    const [item, setItem] = useState("")
    const [price, setPrice] = useState()
    const [items, setItems] = useState([])

    function submitHandler(e) {
        e.preventDefault(); //prevent the form from submitting and forcefully reloading the page 
        // || = or
        // && = and
        //if there is no item or there is no price
        if (!item || !price) {
            alert("Please fill all fields!");
            return
        }
        setItems([...items, { id: Date.now(), item: item, price: Number(price) }]);
        setItem("");
        setPrice("");
    }
    function deleteHandler(id) {
        setItems(items.filter(x=> x.id !==id))

    }
    return <>
        <div>
            <form onSubmit={submitHandler} className="budget-header form d-flex m-5 p-4 border border-warning rounded">
                <input value={item} onChange={e => setItem(e.target.value)} type="text" className="form-control py-4 fs-5" placeholder="Enter Budget Item" />
                <input value={price} onChange={e => setPrice(e.target.value)} type="number" className="form-control mx-4 fs-5" min="0" placeholder="Enter Budget Price" />
                <button className="form-control btn btn-warning fs-5">Add Budget</button>
            </form>
            <div className="total-budget">Total=₦{(items.reduce((a, c) => a + c.price, 0)).toLocaleString()}</div>
            <div className="budget-body mx-5">
                {items.map(x => {
                    return <div className="budget bg-warning  p-3 fs-4 mx-auto rounded mb-1">
                        <span > {x.item}</span>
                        <span>₦{x.price && x.price.toLocaleString()}</span>
                        <span onClick={() => deleteHandler(x.id)} className="btn btn-danger">Delete</span>
                    </div>
                })}

            </div>
        </div>
    </>
}