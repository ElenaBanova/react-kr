import {Link} from "react-router";
import '../menu-navigation-css/menuNavigation.css';
import {retrieveLocalStorage} from "../../../../api/helpers.ts";
import {IUserWithTokens} from "../../../../models/IUserWithTokens.ts";


const MenuNavigation = () => {
    const {image} = retrieveLocalStorage<IUserWithTokens>('user');

    return (
        <div className='menu nav'>
            <div><img className='logo' src={`${image}`} alt=''/></div>
            <div className='click' id='click-menu'><Link className='cl' to={'recipes'}>All recipes</Link></div>
            <div className='click' id='click-menu'><Link className='cl' to={'users'}>All users</Link></div>
            <div>
                <input className='menu-input' type='text' name='username'/>
                <button>Search</button>
            </div>
        </div>
    );
};

export default MenuNavigation;