import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

const AuthModal = ({ isOpen, onClose, onSubmit }: AuthModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: 'hellominy'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onSubmit(formData);
      navigate('/members');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-neutral-900 rounded-xl p-8 max-w-md w-full mx-4">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
            <p className="text-gray-400">
              MINY verification successful! Redirecting to member's area...
            </p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Connect MINY</h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-neutral-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-neutral-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  required
                  className="w-full bg-neutral-800 text-white rounded-lg p-3 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  value={formData.password}
                  disabled
                />
                <p className="text-sm text-gray-400 mt-1">Default password: hellominy</p>
              </div>

              <button type="submit" className="w-full btn btn-primary mt-6">
                Connect
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthModal;