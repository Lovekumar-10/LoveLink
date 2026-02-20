import React from 'react';
import { Ruler, Languages, Users } from 'lucide-react';

const StatEdit = ({ stats, onUpdate }) => {
  // Mapping the fields to match your Profile stats structure
  const statFields = [
    { id: 'height', label: 'Height', icon: <Ruler size={16} />, placeholder: "e.g. 5'6\"" },
    { id: 'languages', label: 'Languages', icon: <Languages size={16} />, placeholder: 'e.g. Hindi, English' },
    { id: 'religion', label: 'Religion', icon: <Users size={16} />, placeholder: 'e.g. Hindu, Brahmin' },
  ];

  return (
    <div 
      className="p-6 space-y-6 border shadow-[var(--shadow-card)]" 
      style={{ 
        backgroundColor: 'var(--bg-card)', 
        borderRadius: 'var(--radius-lg)', 
        borderColor: 'var(--border)' 
      }}
    >
      <h3 
        className="font-black uppercase tracking-tighter" 
        style={{ fontSize: 'var(--fs-h4)', color: 'var(--text-primary)' }}
      >
        Quick Statistics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statFields.map((field) => (
          <div 
            key={field.id}
            className="flex flex-col gap-3 p-4 border transition-all"
            style={{ 
              borderRadius: 'var(--radius-md)', 
              borderColor: 'var(--border)', 
              backgroundColor: 'var(--bg-main)' 
            }}
          >
            {/* Label style matches your StatBox exactly */}
            <div className="flex items-center gap-2" style={{ color: 'var(--text-light)' }}>
              {field.icon}
              <label 
                style={{ 
                  fontSize: 'var(--fs-caption)', 
                  fontWeight: 'var(--fw-bold)', 
                  letterSpacing: '0.05em', 
                  textTransform: 'uppercase' 
                }}
              >
                {field.label}
              </label>
            </div>

            {/* Input field using your body font and secondary family */}
            <input
              type="text"
              value={stats[field.id]}
              onChange={(e) => onUpdate('stats', field.id, e.target.value)}
              placeholder={field.placeholder}
              className="w-full bg-transparent border-b border-[var(--border)] focus:border-[var(--color-primary)] outline-none pb-1 transition-colors"
              style={{ 
                fontSize: 'var(--fs-body)', 
                fontWeight: 'var(--fw-bold)', 
                color: 'var(--text-primary)',
                fontFamily: 'var(--ff-secondary)',
                textTransform: 'uppercase'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatEdit;