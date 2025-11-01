import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/useAuth.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Mock authentication - in real app, this would call your backend API
    const mockUser = { 
      id: 1, 
      email: data.email, 
      role: data.email.includes('admin') ? 'admin' : 'employee',
      name: data.email.includes('admin') ? 'Admin User' : 'Employee User'
    };
    login(mockUser);
    navigate('/dashboard');
  };

  return (
    <div className="flex-center min-h-screen p-4 pastel-bg-blue">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="card-shadow pastel-bg-white max-w-md w-full p-8 rounded-2xl"
      >
        <h1 className="text-3xl text-center mb-6" style={{color: 'var(--pastel-pink)'}}>
          SweetBakery ERP
        </h1>
        
        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            type="email" 
            placeholder="Enter your email"
            className="form-input"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label className="form-label">Password</label>
          <input 
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            type="password" 
            placeholder="Enter your password"
            className="form-input"
          />
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>

        <button type="submit" className="btn-rounded full-width">
          Login to Dashboard
        </button>

        <div className="mt-4 text-center text-sm">
          <p>Try: admin@bakery.com (Admin) or employee@bakery.com (Employee)</p>
        </div>
      </form>
    </div>
  );
};

export default Login;