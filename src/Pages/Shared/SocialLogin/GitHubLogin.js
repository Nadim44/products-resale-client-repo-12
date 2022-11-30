import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const GitHubLogin = () => {
    const { githubProviderLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGithubSignIn = () => {
        githubProviderLogin()
            .then(result => {
                const user = result.user;
                // console.log(user);

                const currentUser = {
                    email: user.email
                }

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        localStorage.setItem('accessToken', data.accessToken)
                        navigate(from, { replace: true })

                    })



            })
            .catch(err => console.error(err))
    }

    return (
        <div className='text-center mt-2'>
            <button onClick={handleGithubSignIn} className='btn btn-outline w-full'>  <span className='p-2 font-bold'>CONTINUE WITH GITHUB</span></button>
        </div>
    );
};

export default GitHubLogin;