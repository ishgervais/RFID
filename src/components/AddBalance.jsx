import cards from "../images/cards.png"
export function AddBalance(){
    return <div className="text-black ">
           <div className="card bg-blue-500 p-5 text-xl text-white font-bold mb-5">RFID CONTROL PANEL || ADD BALANCE</div>
        <div className="lg:flex p-5">
    <div className="bg-white lg:w-1/2 p-5 flex items-center text-sm text-gray-400">
        <div className="m-auto">
            <div className="title text-blue-500 font-bold text-xl">RFID FLOW</div>
        <img src={cards} alt=""/>
        </div>
 
    </div>
    <div className="bg-white lg:w-1/2 p-5 text-black text-sm">
        <form action="" className="p-5">
            <div className="form-group my-5">
                <label htmlFor="">
                    <span className="block float-left my-3">UUID</span>
                    <input type="text" name="" id="" className="form-control p-4 w-full border"/>
                </label>
            </div>
            <div className="form-group my-5">
                <label htmlFor="">
                    <span className="block float-left my-3">Amount</span>
                    <input type="number" name="" id="" className="form-control p-4 w-full border"/>
                </label>
            </div>

            <button type="submit" className="btn bg-blue-500 p-3 rounded text-white w-full">Save</button>
        </form>
    </div>
    </div>
    </div>
}