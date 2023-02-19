import React, { useState, useEffect } from 'react';
import './index.scss';
import { useNavigate, useLocation } from 'react-router';

export const Sidebar: React.FC = () => {
  const [isActiveLink, setIsActiveLink] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathnameSplitted = location.pathname.split('/');
    if (pathnameSplitted[pathnameSplitted.length - 1] === 'profile') {
      setIsActiveLink(false);
    } else {
      setIsActiveLink(true);
    }
  }, [location]);

  return (
    <div className="sidebar">
      <div
        className={`sidebar__link ${!isActiveLink && 'active'}`}
        onClick={() => navigate('user/profile')}
      >
        Profile
      </div>
      <div
        className={`sidebar__link ${isActiveLink && 'active'}`}
        onClick={() => navigate('user/account')}
      >
        Account
      </div>
    </div>
  );
};
