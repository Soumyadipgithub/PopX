import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="w-full p-4 flex justify-end">
        <Link to="/profile" className="text-gray-600 hover:text-gray-900">
          <User className="w-6 h-6" />
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">Welcome to PopX</h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="space-y-4">
            <Link
              to="/register"
              className="block w-full py-3 px-4 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="block w-full py-3 px-4 rounded-lg bg-purple-100 text-purple-600 font-medium hover:bg-purple-200 transition-colors"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}