import React from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { useNavigate, Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onConnectClick?: () => void;
  userName?: string;
}

const Header = ({ onConnectClick, userName }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate('/');
    window.location.reload();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Different menu items based on login state and current page
  const menuItems = userName ? (
    location.pathname === '/dashboard' ? [
      { label: 'Home', href: '/', action: () => navigate('/') },
      { label: 'Mixtapes', href: '#miny-exclusives', action: () => scrollToSection('miny-exclusives') },
      { label: 'Videos', href: '#exclusive-videos', action: () => scrollToSection('exclusive-videos') },
      { label: 'Events', href: '#vip-events', action: () => scrollToSection('vip-events') },
      { label: 'Merch', href: '#member-merch', action: () => scrollToSection('member-merch') }
    ] : [
      { label: 'Dashboard', href: '/dashboard', action: () => navigate('/dashboard') }
    ]
  ) : [
    { label: 'Home', href: '/', action: () => navigate('/') },
    { label: 'Mixtapes', href: '#mixtapes', action: () => scrollToSection('mixtapes') },
    { label: 'Live Shows', href: '#shows', action: () => scrollToSection('shows') },
    { label: 'Artists', href: '#artists', action: () => scrollToSection('artists') },
    { label: 'Merch', href: '#merch', action: () => scrollToSection('merch') }
  ];

  const handleMenuClick = (item: { action: () => void }) => {
    item.action();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center">
            <img 
              src="https://raw.githubusercontent.com/myblackbeanca/regcoffee/refs/heads/main/regslogo.jpg"
              alt="Reg's Coffee House"
              className="h-12 w-auto rounded-full"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleMenuClick(item)}
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                {item.label}
              </button>
            ))}
            {userName ? (
              <div className="flex items-center gap-4">
                <span className="text-amber-400">Welcome, {userName}</span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <button onClick={onConnectClick} className="btn btn-primary">
                Connect MINY
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item)}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              {userName ? (
                <>
                  <span className="text-amber-400">Welcome, {userName}</span>
                  <button 
                    onClick={handleLogout}
                    className="btn btn-secondary flex items-center gap-2 justify-center"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </>
              ) : (
                <button onClick={onConnectClick} className="btn btn-primary w-full">
                  Connect MINY
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;