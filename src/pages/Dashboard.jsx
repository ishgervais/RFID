import { NavLink } from 'react-router-dom';
import cardLogo from '../images/cardLogo.png';
export function Dashboard(props) {
    return (
        <div className="lg:flex lg:gap-5 lg:mx-16 items-center h-screen">
            <div className="lg:w-1/4 h-screeen">
                <div className="text-lg font-bold text-blue-500">P-Track</div>

                <div className="">
                   </div>
                <div className="bg-white rounded shadow-lg my-2 p-5 text-sm">
                    <NavLink to="/balance/logs" className="block p-2">Live Location</NavLink>
                    <NavLink to="/balance/actions" className="block p-2 my-2">Delete / Lock device</NavLink>
                </div>

                <div className="bg-white rounded shadow-lg p-5 text-sm">
                    <NavLink to="/create/card" className="block p-2" activeClassName="active">Register device</NavLink>
                    {/* <NavLink to="/delete/card" className="block p-2">Delete card</NavLink> */}
                    <NavLink to="/view/cards" className="block p-2 my-2">View devices</NavLink>
                </div>

                {/* <div className="bg-white rounded  my-3 p-5 text-xs lg:block sm:hidden  ">
            &copy; 2021 ~ Dev. Gervais <br/> gervais@gurafy.com
        </div> */}


            </div>

            <div className="lg:w-3/4 bg-blue-500 lg:h-screen px-5 py-2 text-white overflow-auto">
                {props.children}
            </div>
            <div className="bg-white rounded  my-3 p-5 text-xs sm:block ">
                &copy; 2021 ~ Propinquity solutions
        </div>
        </div>
    );
}
