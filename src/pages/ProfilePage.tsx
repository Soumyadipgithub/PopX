import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Account Settings</h1>
          <Link
            to="/"
            className="text-sm text-purple-600 hover:text-purple-700 transition-colors"
          >
            Logout
          </Link>
        </div>
      </header>

      <main className="p-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 flex items-start space-x-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h2 className="font-semibold text-lg">Marry Doe</h2>
              <p className="text-gray-600">Marry@email.com</p>
            </div>
          </div>
          <div className="p-4 border-t border-gray-100">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}