import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FrostedGlassPane from '../components/FrostedPane';
import FrostedButton from './FrostedButton';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full px-2 py-2 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between relative">
        <h1 className="neon-title text-3xl sm:text-4xl font-bold">{title || 'Game On'}</h1>

        {/* Frosted Hamburger Button */}
        <FrostedButton
          className="sm:hidden neon-title p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{padding: 10, margin: 0 }} // override if needed
        >
          <svg
            className="w-6 h-6 neon-title"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </FrostedButton>

        {/* Nav Menu (Desktop) */}
        <nav className="z-50 hidden sm:flex gap-6" style={{ animation: 'var(--animation-slideInRight)' }}>
          {[
            { to: '/', label: 'Home' },
            { to: '/Events', label: 'Events' },
            { to: '/Band_Members', label: 'Band Members' },
            { to: '/Media', label: 'Media' },
            { to: '/Honking_Stuff', label: 'Honking Stuff' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link text-2xl text-white hover:text-cyan-300 ${isActive(to) ? 'underline text-cyan-300' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Nav Menu (Mobile dropdown) inside FrostedGlassPane */}
        {menuOpen && (
          <div className="z-50 absolute top-full right-0 mt-2 sm:hidden" style={{ animation: 'var(--animation-slideInRight)' }}>
            <FrostedGlassPane>
              <nav className="flex flex-col p-2 gap-2">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/Events', label: 'Events' },
                  { to: '/Band_Members', label: 'Band Members' },
                  { to: '/Media', label: 'Media' },
                  { to: '/Honking_Stuff', label: 'Honking Stuff' },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMenuOpen(false)}
                    className={`nav-link text-2xl px-2 py-1 text-white hover:text-cyan-300 ${isActive(to) ? 'underline text-cyan-300' : ''}`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </FrostedGlassPane>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
