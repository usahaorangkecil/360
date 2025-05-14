
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl">EDUVIRTUAL</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Beranda</Link>
            <Link to="/features" className="text-gray-700 hover:text-primary font-medium">Fitur</Link>
            <Link to="/industries" className="text-gray-700 hover:text-primary font-medium">Industri</Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary font-medium">Harga</Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:block">Masuk</Button>
            <Button className="bg-primary text-white">Mulai</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
