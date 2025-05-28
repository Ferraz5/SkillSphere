'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // para App Router

export default function AuthBox() {
  const [isRegister, setIsRegister] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui você faria a verificação do login com backend ou serviço de autenticação

    // Redireciona para a homepage após o "login"
    router.push('../chProfile/ChProfile');
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isRegister ? 'Register' : 'Sign In'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
            {isRegister ? 'Register' : 'Sign In'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button onClick={() => setIsRegister(!isRegister)} className="text-blue-600 underline">
            {isRegister ? 'Sign In' : 'Register'}
          </button>
        </p>
      </div>
    </div>
  );
}
