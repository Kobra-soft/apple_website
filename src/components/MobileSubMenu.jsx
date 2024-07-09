// MobileSubmenu.jsx
import React from 'react';

const MobileSubMenu = ({ titles, onClose }) => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000, // Ensure it's above other content
    }}>
      <button onClick={onClose} style={{
        position: 'absolute',
        top: 20,
        right: 20,
        fontSize: '1.5rem',
        background: 'none',
        border: 'none',
        color: 'red',
        cursor: 'pointer',
      }}>X</button>
      <div style={{
        color: 'green',
        textAlign: 'center',
      }}>
        {titles.map((title, index) => (
          <p key={index} style={{ marginBottom: '1rem' }}>{title}</p>
        ))}
      </div>
    </div>
  );
};

export default MobileSubMenu;