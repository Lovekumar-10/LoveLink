import React from 'react';

const DetailRow = ({ label, value }) => (
  <div className="flex flex-col gap-1 py-1">
    <span style={{ 
      fontSize: 'var(--fs-caption)', 
      fontWeight: 'var(--fw-bold)', 
      color: 'var(--text-light)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }}>
      {label}
    </span>
    <span style={{ 
      fontSize: 'var(--fs-body)', 
      fontWeight: 'var(--fw-medium)', 
      color: 'var(--text-secondary)',
      fontFamily: 'var(--ff-secondary)'
    }}>
      {value}
    </span>
  </div>
);

export default DetailRow;