import React from 'react';


const LogoutButton: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <button onClick={onLogout}>
      Logout
    </button>
  );
};


const Logout: React.FC = () => {

  const handleLogout = () => {
    // Perform logout actions here
    
  };

  return (
    <div>
      
      <LogoutButton onLogout={handleLogout} />
    </div>
  );
};

export default Logout;
