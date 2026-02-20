import React from 'react';
import { Briefcase, GraduationCap, Building2, Wallet } from 'lucide-react';

const DetailEdit = ({ details, onUpdate }) => {
  // Mapping your professional background details
  const fields = [
    { id: 'education', label: 'Education', icon: <GraduationCap size={16} />, placeholder: 'e.g. M.Tech - IIT Delhi' },
    { id: 'occupation', label: 'Occupation', icon: <Briefcase size={16} />, placeholder: 'e.g. Software Engineer' },
    { id: 'company', label: 'Company', icon: <Building2 size={16} />, placeholder: 'e.g. Google India' },
    { id: 'income', label: 'Annual Income', icon: <Wallet size={16} />, placeholder: 'e.g. ₹25L - ₹30L' },
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
      <div className="flex items-center gap-2 mb-2">
        <Briefcase size={20} className="text-[var(--color-primary)]" />
        <h3 
          className="font-black uppercase tracking-tighter" 
          style={{ fontSize: 'var(--fs-h4)', color: 'var(--text-primary)' }}
        >
          Professional Background
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((field) => (
          <div key={field.id} className="flex flex-col gap-2">
            {/* Label style matches your DetailRow exactly */}
            <label 
              style={{ 
                fontSize: 'var(--fs-caption)', 
                fontWeight: 'var(--fw-bold)', 
                color: 'var(--text-light)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}
              className="flex items-center gap-2"
            >
              {field.icon} {field.label}
            </label>

            {/* Input style follows your body font rules */}
            <input
              type="text"
              value={details[field.id]}
              onChange={(e) => onUpdate('background', field.id, e.target.value)}
              placeholder={field.placeholder}
              className="w-full px-4 py-3 border transition-all outline-none focus:ring-1 focus:ring-[var(--color-primary)]"
              style={{ 
                fontSize: 'var(--fs-body)', 
                fontWeight: 'var(--fw-medium)', 
                color: 'var(--text-secondary)',
                fontFamily: 'var(--ff-secondary)',
                backgroundColor: 'var(--bg-main)',
                borderColor: 'var(--border)',
                borderRadius: 'var(--radius-sm)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailEdit;