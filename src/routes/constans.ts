export const AppRoutes = {
    root: '/',
    path: '',
    login: 'login',
    auth: 'auth',
    users: 'users',
    user: ':userId',
    userId: '../users/:userId',
    userSearch: 'users/:userId',
    recipes: 'recipes',
    recipeId: ':recipeId',
    recipe: '../recipes/:recipeId',
    recipesSearch: 'recipes/:recipeId',
    recipeTag: 'tag/:tagFind',
    recipeTags: '../recipes/tag/:tagFind'
};
