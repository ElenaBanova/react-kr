import {Link} from "react-router";
import '../menu-navigation-css/menuNavigation.css';
import {retrieveLocalStorage} from "../../../../api/helpers.ts";
import {IUserWithTokens} from "../../../../models/IUserWithTokens.ts";
import Search from "../search/cearch/Search.tsx";


const MenuNavigation = () => {
    const {image} = retrieveLocalStorage<IUserWithTokens>('user');

    return (
        <div className='menu nav'>
            <div><img className='logo' src={`${image}`} alt=''/></div>
            <div className='click' id='click-menu'><Link className='cl' to={'recipes'}>All recipes</Link></div>
            <div className='click' id='click-menu'><Link className='cl' to={'users'}>All users</Link></div>
            <div>
                <Search/>
            </div>
        </div>
    );
};

export default MenuNavigation;