import React, { useState } from 'react';
import './index.scss';

export const Sidebar: React.FC = () => {
  const [isActiveLink, setIsActiveLink] = useState(false);

  return (
    <div className="sidebar">
      <div
        className={`sidebar__link ${!isActiveLink && 'active'}`}
        onClick={() => setIsActiveLink(false)}
      >
        Profile
      </div>
      <div
        className={`sidebar__link ${isActiveLink && 'active'}`}
        onClick={() => setIsActiveLink(true)}
      >
        Account
      </div>
    </div>
  );
};
