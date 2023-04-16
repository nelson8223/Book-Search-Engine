import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [addUserMutation, { error }] = useMutation(ADD_USER);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addUserMutation({
        variables: { username, email, password }
      });

      // Handle any necessary state updates or UI changes after successful mutation
      console.log(response);

      // Reset form data
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Failed to add user:', error);
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
            placeholder="Add your profile name..."
            value={username}
            className="form-input w-100"
            onChange={(event) => setUsername(event.target.value)}
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

export default SignupForm;
