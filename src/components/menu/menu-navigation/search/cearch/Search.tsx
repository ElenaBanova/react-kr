import {useEffect, useState} from "react";
import {searchRecipe} from "../../../../../api/search.api.ts";
import {IRecipe} from "../../../../../models/IRecipe.ts";
import {IUser} from "../../../../../models/IUser.ts";
import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../../../routes/constans.ts";
import '../search-css/search.css';


const Search = () => {
    const [search, setSearch] = useState<string>()
    const [recipe, setRecipe] = useState<IRecipe[]>([])
    const [user, setUser] = useState<IUser[]>([])

    useEffect(() => {
        if (!search) {
            setRecipe([])
            setUser([])
        } else {
            searchRecipe(search)
                .then(({recipes, users}) => {
                    setRecipe(recipes);
                    setUser(users)
                })
        }

    }, [search]);

    const handleClick = () => {
        setRecipe([])
        setUser([])
    };

    return (
        <div>
            <label className='label'>
                <h4 className='search-name'>Search</h4>
                <input className='menu-input' type='text' name='searchPage' onChange={x => setSearch(x.target.value)}/>
                <div className='search'>
                    {recipe && recipe.map(recipe => <div key={recipe.id}>
                        <Link className='search-window' onClick={() => handleClick()}
                              to={generatePath(AppRoutes.recipesSearch, {recipeId: recipe.id})}>Recipe: {recipe.name}</Link>
                    </div>)}
                    {user && user.map((user => <div key={user.id}>
                        <Link className='search-window' onClick={() => handleClick()}
                              to={generatePath(AppRoutes.userSearch, {userId: user.id})}>User: {user.firstName}</Link>
                    </div>))}</div>
            </label>
        </div>
    );
};

export default Search;