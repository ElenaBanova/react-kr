import {Link} from "react-router";


const ButtonCallbackAllUsers = () => {

    return (
        <div>
            <Link to={'../auth/users'}>
                <button>Callback</button>
            </Link>
        </div>
    );
};

export default ButtonCallbackAllUsers;