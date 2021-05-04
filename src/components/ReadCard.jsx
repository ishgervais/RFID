import {getAllCards} from '../services/api';
import {useState, useEffect} from 'react';

// skeleton loader 
import Skeleton from "react-loading-skeleton";
export function ReadCards(){
    const [cards,setCards] = useState([])
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const data = async()=>{
            setLoading(true)
            const response = await getAllCards();
            setCards(response);
            setLoading(false)
        }
      data();
    },[]);
    console.log(cards);
    return(
        <div>
              <div className="card bg-blue-500 p-5 text-xl text-white font-bold mb-5">RFID CONTROL PANEL</div>
         <div className="card--logs">
            {/* card one starts */}
            {cards?.map((item)=>{
                return(
                    <div className="bg-white rounded shadow-lg text-black p-5 my-4 lg:flex gap-5 w-full">
                    <div className="lg:w-1/4 mb-2 card--code">
                        <div className="title font-bold mb-3">CARD ID</div>
                        {loading ? 
                        <Skeleton height={25} width={Math.ceil((Math.random()+9)*9)+"%"}/>
                    :
                       <> {item.uuid} </>
            }
                    </div>
                    <div className="lg:w-1/4 mb-2 card--balance">
                        <div className="title font-bold mb-3">CARD OWNER</div>
                   
                        {loading ? 
                        <Skeleton height={25} width={Math.ceil((Math.random()+10)*9)+"%"}/>
                    :
                       <> {item.Owner} </>
            }
                    </div>
                    <div className="lg:w-1/4 mb-2">
                        <div className="title font-bold mb-3">CARD BALANCE</div>
                      
                        {loading ? 
                        <Skeleton height={25} width={Math.ceil((Math.random()+10)*9)+"%"}/>
                    :
                       <> {item.current_balance} </>
            }
                    </div>
                    <div className="lg:w-1/4 mb-2">
                        <div className="title font-bold mb-3">ACTION</div>
                       Delete
                    </div>
    
                </div>
                );
            })}
           

            {/* card ends here */}





        </div>
        </div>
    )
}