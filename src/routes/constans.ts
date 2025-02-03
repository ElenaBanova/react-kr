export const AppRoutes = {
    root: '/',
    path: '',
    login: 'login',
    auth: 'auth',
    users: 'users',
    user: ':userId',
    userId: '../users/:userId',
    recipes: 'recipes',
    recipeId: ':recipeId',
    recipe: '../recipes/:recipeId',
    recipeTag: 'tag/:tagFind',
    recipeTags: '../recipes/tag/:tagFind'
};
