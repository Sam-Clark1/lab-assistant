import React, {useState} from 'react';
import { Alert } from '@mui/material';
import { BeakerIcon } from '@heroicons/react/outline';
import AuthService from '../../api/auth.service';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();
  const [formState, setFormState] = useState({username:'', password:''});
  const {username, password} = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormState({...formState, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username.length > 0 && password.length > 0) {
      await AuthService.login(username, password).then(
        () => {
          navigate('/');
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setErrorMessage(resMessage);
        }
    )}
  }

  return (
  <>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-[84vh]">
        <div className="max-w-lg w-auto space-y-8 bg-card p-14 mb-36 shadow-lg shadow-black rounded">
          <div>
            <BeakerIcon className="mx-auto h-12 w-auto text-accent"/>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-1text">
                Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                  placeholder="Username"
                  defaultValue={username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-accent focus:border-accent focus:z-10 sm:text-sm"
                  placeholder="Password"
                  defaultValue={password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-card bg-accent hover:bg-card hover:text-accent hover:shadow-md hover:shadow-black">
                Sign in
              </button>
            </div>
          </form>
          <Alert severity="error" className={`relative  ${errorMessage.length === 0 ? 'invisible' : ''}`} onClose={() => {setErrorMessage('')}}>{errorMessage}</Alert>
        </div>
      </div>
    </>
  );
}
