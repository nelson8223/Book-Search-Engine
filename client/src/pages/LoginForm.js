import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginUserMutation, { error }] = useMutation(LOGIN_USER);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await loginUserMutation({
        variables: { email, password }
      });

      // Handle any necessary state updates or UI changes after successful mutation
      console.log(response);

      // Reset form data
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  // Render component UI here
  return (
    <div>
      <h3>Please sign in ...</h3>
      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleSubmit}
      >
        <div className="col-12 col-lg-9">
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="form-input w-100"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="form-input w-100"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="col-12 col-lg-3">
          <button className="btn btn-info btn-block py-3" type="submit">
            Sign in
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
