import UseUserInfo from "./useUserInfo.ts";
import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../../routes/constans.ts";
import '../user-info-css/user-info.css';


const UserInfo = () => {
    const {user, recipesId} = UseUserInfo();
    return (
        <div className='user-info'>
            {user && <div className='user-div'>
                <div>
                    <img className='user-image' src={user.image} alt={''}/>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    <div>Age {user.age}, {user.birthDate}</div>
                    <div>{user.university}</div>
                </div>
                {recipesId && <div className='user-recipes'>
                    <h2 className='user-recipes-name'>List of user recipes:</h2>
                    {recipesId.map(recipe => <Link className='recipesId-link' key={recipe.id}
                                                   to={generatePath(AppRoutes.recipe, {recipeId: recipe.id})}
                                                   relative="route">
                        <div key={recipe.id}>{recipe.name}</div>
                    </Link>)}
                </div>}
            </div>}
        </div>
    );
};

export default UserInfo;