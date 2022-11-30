import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';
import GitHubLogin from '../Shared/SocialLogin/GitHubLogin';

import GoogleLogin from '../Shared/SocialLogin/GoogleLogin';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    // const { signIn, googleSignIn } = useContext(AuthContext)
    const { signIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // const [token] = useToken(loginUserEmail)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    // if (token) {
    //     navigate(from, { replace: true });
    // }

    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // setLoginUserEmail(data.email);
                // navigate(from, { replace: true })
                saveUser(data.email, data.password)

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })

    }

    /////
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('saveuser', data)
                // navigate('/');
                getUserToken(email)
                // setLoginUserEmail(email)
            });
    }

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken)
                    navigate(from, { replace: true })
                }
            })
    }




    return (
        <div className='h-[800px]  flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span> </label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required",
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password?</span> </label>
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>

                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <GoogleLogin></GoogleLogin>
                {/* <GitHubLogin></GitHubLogin> */}

            </div>
        </div>
    );
};

export default Login;