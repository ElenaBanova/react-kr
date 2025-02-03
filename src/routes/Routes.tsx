import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import RecipesPage from "../pages/RecipesPage.tsx";
import {RecipeInfoPage} from "../pages/RecipeInfoPage.tsx";
import LoginPage from "../pages/LoginPage.tsx";
import StartPage from "../pages/StartPage.tsx";
import AuthResourcesLayout from "../layouts/AuthResourcesLayout.tsx";
import {UserInfoPage} from "../pages/UserInfoPage.tsx";
import ButtonCallbackAllUsers from "../components/button/button-callback=all-users/ButtonCallbackAllUsers.tsx";
import TagsSearchRecipesPage from "../pages/TagsSearchRecipesPage.tsx";


export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: '', element: <StartPage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'auth', element: <AuthResourcesLayout/>, children: [
                    {path: 'users', element: <UsersPage/>},
                    {path: 'users/:userId', element: <UserInfoPage/>},
                    {path: 'recipes', element: <RecipesPage/>},
                    {path: 'recipes/:recipeId', element: <RecipeInfoPage/>},
                    {path: 'recipes/tag/:tagFind', element: <TagsSearchRecipesPage/>},
                ]
            }
        ]
    },
    {
        path: '*', element:
            <div>
                <div>404 | Not Found</div>
                <ButtonCallbackAllUsers/>
            </div>
    }
])