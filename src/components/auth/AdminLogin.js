'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Card from '@/components/ui/Card';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const result = login(credentials.username, credentials.password);
    
    if (result.success) {
      router.push('/admin');
    } else {
      setError(result.error);
    }
    
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 flex items-center justify-center py-8 px-4">
      <Card className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md border-white/20">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl">🔐</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
          <p className="text-purple-200 text-sm">Access the registration management dashboard</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {error && (
            <div className="bg-red-500/20 border border-red-400/50 rounded-lg p-4 text-center">
              <p className="text-red-300 text-sm font-medium">❌ {error}</p>
            </div>
          )}

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">
              Username <span className="text-red-400">*</span>
            </label>
            <input 
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">
              Password <span className="text-red-400">*</span>
            </label>
            <input 
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
              placeholder="Enter admin password"
            />
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
              isLoading 
                ? 'bg-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transform hover:scale-105'
            } text-white shadow-lg`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </span>
            ) : (
              'Login to Admin Dashboard'
            )}
          </button>
        </form>

        {/* Info */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-purple-300 text-xs">
            Authorized personnel only. Contact the organizing committee if you need access.
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-4 text-center">
          <a 
            href="/"
            className="text-purple-300 hover:text-white text-sm transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </Card>
    </div>
  );
};

export default AdminLogin;