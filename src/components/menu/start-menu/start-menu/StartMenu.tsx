import {Link} from "react-router";
import '../start-menu-css/startMenu.css';


const StartMenu = () => {
    return (
        <div>
            <div className='menu start'><Link className='click' to={'/login'}>Log in</Link></div>
            <h1>
                Welcome to our website.
                To view content and further work with site, you need to authenticate.
            </h1>
        </div>
    );
};

export default StartMenu;