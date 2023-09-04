import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<any>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);

        // Client-side validation
        const validationErrors: any = {};
        if (!email.trim()) {
        validationErrors.email = 'Email is required';
        }
        if (!password.trim()) {
        validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setIsLoading(false);
        return;
        }

        // Simulate login (replace with your actual authentication logic)
        // For demonstration purposes, we'll navigate to the dashboard after a brief delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Redirect to the dashboard
        router.push('/dashboard');
    };
  
  return (
    // <div className='m-auto flex justify-center' style={{padding: "18% 0"}} >
    // <div className="flex items-center justify-center bg-gray-50 py-4 px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-center min-h-screen py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-2">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none ${
                    errors.email ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 focus:z-10'
                }`}
              />
               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                // className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none ${
                    errors.password ? 'border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 focus:z-10'
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              }`}
              disabled={isLoading}
              onClick={handleFormSubmit}
            >
               {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
