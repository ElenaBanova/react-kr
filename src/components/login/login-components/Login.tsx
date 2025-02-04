import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {validator} from "../../../validators/validator.ts";
import {login} from "../../../api/api.ts";
import {useNavigate} from "react-router";
import '../login-css/login.css'


interface ILoginFormProps {
    username: string,
    password: string,
}

const UseLogin = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<ILoginFormProps>({
        mode: 'all',
        resolver: joiResolver(validator),
    });

    const formReceivedData = (formDataProps: ILoginFormProps) => {
        login({
            username: formDataProps.username,
            password: formDataProps.password,
            expiresInMins: 1,
        });
    };

    const navigate = useNavigate();

    return (<div className='form-page'>
        <form className='form' onSubmit={handleSubmit(formReceivedData)}>
            <h3 className='form-name'>Authentication form</h3>
            <label>
                <input className='form-input' type='text' {...register('username')}/>
                {errors.username && <div>{errors.username.message}</div>}
            </label>
            <label>
                <input className='form-input' type='text' {...register('password')}/>
                {errors.password && <div>{errors.password.message}</div>}
            </label>
            <button className='form-button' onClick={() => navigate('/auth', {replace: false})} disabled={!isValid}> Login</button>
        </form>
    </div>);
};

export default UseLogin;



