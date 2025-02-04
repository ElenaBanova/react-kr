import {generatePath, Link} from "react-router";
import {AppRoutes} from "../../../../routes/constans.ts";
import UseUsersList from "./useUsersList.ts";
import '../users-list-css/usersList.css';


const UsersList = () => {
    const users = UseUsersList();
    return (
        <div className='users-list'>
            {users.map(user =>
                <Link className='user-list-link' key={user.id}
                      to={generatePath(AppRoutes.user, {userId: user.id})}
                      relative="route">
                    <div key={user.id}> {user.firstName} {user.lastName}</div>
                    <div>{user.email}</div>
                </Link>)}
        </div>
    );
};

export default UsersList;