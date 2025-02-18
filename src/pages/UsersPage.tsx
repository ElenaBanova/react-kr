import UsersList from "../components/users/users-list/users-list-components/UsersList.tsx";
import Pagination from "../components/pagination/pagination/Pagination.tsx";


const UsersPage = () => {

    return (
        <div>
            <h1 className='users-list-name'>The page of all users.</h1>
            <h3>Clicking on the desired user will take you to the page with detailed information about the user.</h3>
            <UsersList/>
            <Pagination/>
        </div>);
};

export default UsersPage;