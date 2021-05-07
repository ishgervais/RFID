// import { getAllCards } from '../services/api';
import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client"
// skeleton loader 
import Skeleton from "react-loading-skeleton";
import url from '../utils/url';
import { icons } from '../utils/icons';

export function TransactionsLogs() {
    const [cards, setCards] = useState([])
    const [loading, setLoading] = useState(false);

    // useEffect(()=>{
    //     const data = async()=>{
    //         setLoading(true)
    //         const response = await getAllCards();
    //         setCards(response);
    //         setLoading(false)
    //     }
    //   data();
    // },[]);
    useEffect(() => {
        setLoading(true);
        const socket = socketIOClient(url);
        socket.on("Transactions", (data) => {
            console.log(data)
            setCards(data);
            setLoading(false);
        })

        return () => {
            socket.disconnect()
        }
    }, [])

    // console.log(cards);
    return (
        <div className="transition duration-500 ease-in-out">
            <div className="card bg-blue-500 p-5 text-xl text-white font-bold mb-5">RFID CONTROL PANEL | TRANSACTION LOGS</div>
            <div className="card--logs text-sm">
                {/* card one starts */}
                {loading ?
                    <>

                        <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                            <div className="lg:w-1/4 mb-2 card--code">
                                <div className="title font-bold mb-3">CARD ID</div>

                                <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/4 mb-2 card--balance">
                                <div className="title font-bold mb-3">TRANSACTION FARE</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />


                            </div>
                            <div className="lg:w-1/4 mb-2">
                                <div className="title font-bold mb-3">NEW BALANCE</div>


                                <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />

                            </div>
                            <div className="lg:w-1/4 mb-2">
                                <div className="title font-bold mb-3 gap-2">ACTION</div>
                                <div className="flex gap-2 justify-center">

                                    <span className="flex justify-center">   {icons.eye}</span>
                                    {/* <span className="flex justify-center">   {icons.trash}</span>
                                    <span className="flex justify-center">   {icons.add}</span> */}
                                </div>
                            </div>

                        </div>
                    </>
                    :
                    <>
                        {cards?.slice().reverse().map((item) => {
                            return (
                                <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                                    <div className="lg:w-1/4 mb-2 card--code">
                                        <div className="title font-bold mb-3">CARD ID</div>
                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 9) * 9) + "%"} />
                                            :
                                            <> {item.transactions[0]?.uuid} </>}
                                    </div>
                                    <div className="lg:w-1/4 mb-2 card--balance">
                                        <div className="title font-bold mb-3">TRANSACTION FARE</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> {item.transactions_fare} </>}
                                    </div>
                                    <div className="lg:w-1/4 mb-2">
                                        <div className="title font-bold mb-3">NEW BALANCE</div>

                                        {loading ?
                                            <Skeleton height={25} width={Math.ceil((Math.random() + 10) * 9) + "%"} />
                                            :
                                            <> {item.new_balance} </>}
                                    </div>
                                    <div className="lg:w-1/4 mb-2">
                                        <div className="title font-bold mb-3">ACTION</div>
                                        <div className="flex gap-2 justify-center">
                                            <span className="flex justify-center">   {icons.eye}</span>
                                            {/* <span className="flex justify-center">   {icons.trash}</span> */}
                                            {/* <span className="flex justify-center">   {icons.add}</span>
                                             */}
                                        </div>

                                    </div>

                                </div>
                            );
                        })}
                    </>}


                {/* card ends here */}





            </div>
        </div>
    )
}