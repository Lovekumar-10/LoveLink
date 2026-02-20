import React from 'react';

const StatBox = ({ icon, label, value }) => (
  <div 
    className="flex flex-col gap-2 p-4 border transition-all hover:shadow-[var(--shadow-hover)]"
    style={{ 
      borderRadius: 'var(--radius-md)', 
      borderColor: 'var(--border)', 
      backgroundColor: 'var(--bg-card)' 
    }}
  >
    <div className="flex items-center gap-2" style={{ color: 'var(--text-light)' }}>
      {icon} 
      <span style={{ 
        fontSize: 'var(--fs-caption)', 
        fontWeight: 'var(--fw-bold)', 
        letterSpacing: '0.05em', 
        textTransform: 'uppercase' 
      }}>
        {label}
      </span>
    </div>
    <div style={{ 
      fontSize: 'var(--fs-body)', 
      fontWeight: 'var(--fw-bold)', 
      color: 'var(--text-primary)',
      textTransform: 'uppercase'
    }}>
      {value}
    </div>
  </div>
);

export default StatBox;