import { NavLink } from 'react-router-dom';
import cardLogo from '../images/cardLogo.png';
export function Dashboard(props) {
    return (
        <div className="lg:flex lg:gap-5 lg:mx-16 items-center h-screen">
            <div className="lg:w-1/4 h-screeen">
                <div className="text-lg font-bold text-blue-500">P-Track</div>

                <div className="">
                   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127599.77736554432!2d30.065733447199737!3d-1.9562284705543516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f46d387275%3A0x7b8b917a7206d1e2!2sKigali%20Convention%20Centre!5e0!3m2!1sen!2srw!4v1631732523220!5m2!1sen!2srw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="bg-white rounded shadow-lg my-2 p-5 text-sm">
                    <NavLink to="/balance/logs" className="block p-2">Live location</NavLink>
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
                &copy; 2021 ~ Propiquinty Solutions
        </div>
        </div>
    );
}
