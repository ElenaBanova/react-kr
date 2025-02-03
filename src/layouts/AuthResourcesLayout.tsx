import {Outlet} from "react-router";
import MenuNavigation from "../components/menu/menu-navigation/menu-navigation-components/MenuNavigation.tsx";


const AuthResourcesLayout = () => {
    return (
        <div>
            <MenuNavigation/>
            <Outlet/>
        </div>
    );
};

export default AuthResourcesLayout;