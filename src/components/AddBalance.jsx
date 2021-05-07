import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cards from "../images/cards.png"
import { addTransaction } from '../services/api';
export function AddBalance() {
    // initializing the form values
    const [uuid, setUUID] = useState('');
    const [transType, setTransType] = useState('');
    const [amount, setAmount] = useState('');
    const [error, setError] = useState();

    // history route
    const history = useHistory();
    // submit formdata
    const handleUUID = (e) => {
        setUUID(e.target.value)
        console.log(uuid)
    }
    const handleTransType = (e) => {
        setTransType(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        await addTransaction({
            uuid,
            transaction_fare: amount,
            type: transType
        })
            .then(() => {
                history.push("/balance/logs")
            })
            .catch((error) => {
                console.log(error.response.data.message)
                setError(error.response.data.message)
            })

    }

    return <div className="text-black ">
        <div className="card bg-blue-500 p-5 text-xl text-white font-bold mb-5">RFID CONTROL PANEL | CARD ACTIONS</div>
        <div className="lg:flex p-5">
            <div className="bg-white lg:w-1/2 p-5 flex items-center text-sm text-gray-400">
                <div className="m-auto">
                    <div className="title text-blue-500 font-bold text-xl">RFID FLOW</div>
                    <img src={cards} alt="" />
                </div>

            </div>
            <div className="bg-white lg:w-1/2 p-5 text-black text-sm">
                {error &&
                    <div className="error-log bg-red-500 text-white w-full text-center py-3 rounded">{error}</div>
                }
                <form action="" onSubmit={handleSubmit} className="p-5">
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">UUID</span>
                            <input type="text" onChange={handleUUID} value={uuid} id="" className="form-control p-4 w-full border" required />
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Transaction type</span>
                            <select id="" className="form-control p-4 w-full border" onChange={handleTransType} value={transType} required>
                                <option value="">----select action-----</option>
                                <option value="deposit">Deposit</option>
                                <option value="withdraw">Withdraw</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-group my-5">
                        <label htmlFor="">
                            <span className="block float-left my-3">Amount</span>
                            <input type="number" onChange={handleAmount} value={amount} id="" className="form-control p-4 w-full border" required />
                        </label>
                    </div>

                    <button type="submit" className="btn bg-blue-500 p-3 rounded text-white w-full">Save</button>
                </form>
            </div>
        </div>
    </div>
}