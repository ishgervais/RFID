import {NavLink} from 'react-router-dom';
import cardLogo from '../images/cardLogo.png';
export function Dashboard(props) {
return(
<div className="lg:flex lg:gap-5 lg:mx-16 items-center">
    <div className="lg:w-1/4 h-screeen">
        <div className="text-lg font-bold text-blue-500 lg:float-left">RFID Control Panel</div>
        <div className="">
            <img src={cardLogo} alt=""/>
        </div>
        <div className="bg-white rounded shadow-lg p-5 text-sm">
            <NavLink to="/create/card" className="block p-2" activeClassName="active">Register card</NavLink>
            <NavLink to="/delete/card" className="block p-2">Delete card</NavLink>
            <NavLink to="/view/cards" className="block p-2">View cards</NavLink>
        </div>
        <div className="bg-white rounded shadow-lg my-2 p-5 text-sm">
            <NavLink to="/balance/add" className="block p-2">Add balance</NavLink>
            <NavLink to="/balance/remove" className="block p-2">Remove balance</NavLink>
            <NavLink to="/balance/clear" className="block p-2">Clear card</NavLink>
        </div>
        {/* <div className="bg-white rounded  my-3 p-5 text-xs lg:block sm:hidden  ">
            &copy; 2021 ~ Dev. Gervais <br/> gervais@gurafy.com
        </div> */}


    </div>

    <div className="lg:w-3/4 bg-blue-500 lg:h-screen p-5 text-white">
      {props.children}
    </div>
    <div className="bg-white rounded  my-3 p-5 text-xs sm:block ">
    &copy; 2021 ~ Dev. Gervais <br/> gervais@gurafy.com
        </div>
</div>
);
}