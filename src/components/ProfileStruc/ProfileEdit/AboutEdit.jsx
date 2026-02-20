import React from 'react';
import { Heart, Star, User, Moon } from 'lucide-react';

const ProfileAboutEdit = ({ value, personal, astro, onUpdate }) => {
  
  // Helper to render edit rows that match your InfoGroup table style
  const EditRow = ({ label, icon, val, category, field }) => (
    <div 
      className="grid grid-cols-2 p-3 border-b last:border-0 items-center"
      style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-card)' }}
    >
      <div className="flex items-center gap-3">
        <span style={{ color: 'var(--color-primary)' }}>{icon}</span>
        <span 
          className="uppercase tracking-wider"
          style={{ fontSize: 'var(--fs-caption)', fontWeight: 'var(--fw-bold)', color: 'var(--text-light)' }}
        >
          {label}
        </span>
      </div>
      <input 
        type="text"
        value={val}
        onChange={(e) => onUpdate(category, field, e.target.value)}
        className="bg-[var(--bg-main)] px-2 py-1 rounded border-none focus:ring-1 focus:ring-[var(--color-primary)] outline-none"
        style={{ 
          fontSize: 'var(--fs-small)', 
          fontWeight: 'var(--fw-bold)', 
          color: 'var(--text-primary)',
          fontFamily: 'var(--ff-secondary)' 
        }}
      />
    </div>
  );

  return (
    <div className="space-y-10">
      {/* 1. Edit Bio Text */}
      <div className="space-y-4">
        <h3 
          className="font-black uppercase tracking-tighter"
          style={{ fontSize: 'var(--fs-h3)', color: 'var(--text-primary)' }}
        >
          Edit Bio Paragraph
        </h3>
        <textarea 
          value={value}
          onChange={(e) => onUpdate('about', null, e.target.value)}
          className="w-full p-4 border rounded-[var(--radius-md)] focus:border-[var(--color-primary)] outline-none bg-[var(--bg-card)]"
          style={{ 
            fontSize: 'var(--fs-body)', 
            color: 'var(--text-secondary)',
            fontFamily: 'var(--ff-secondary)',
            borderColor: 'var(--border)',
            minHeight: '120px'
          }}
          placeholder="Write your bio here..."
        />
      </div>

      {/* 2. Edit Tables Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Personal Details Edit */}
        <div>
          <h4 className="uppercase font-black tracking-widest mb-3" style={{ fontSize: 'var(--fs-caption)', color: 'var(--color-primary)' }}>
            Personal Details
          </h4>
          <div className="border overflow-hidden" style={{ borderRadius: 'var(--radius-md)', borderColor: 'var(--border)' }}>
            <EditRow label="Marital Status" icon={<Heart size={14}/>} val={personal.marital} category="personal" field="marital" />
            <EditRow label="Diet" icon={<Star size={14}/>} val={personal.diet} category="personal" field="diet" />
            <EditRow label="Physical Status" icon={<Star size={14}/>} val={personal.physical} category="personal" field="physical" />
          </div>
        </div>

        {/* Astro Details Edit */}
        <div>
          <h4 className="uppercase font-black tracking-widest mb-3" style={{ fontSize: 'var(--fs-caption)', color: 'var(--color-primary)' }}>
            Astro Details
          </h4>
          <div className="border overflow-hidden" style={{ borderRadius: 'var(--radius-md)', borderColor: 'var(--border)' }}>
            <EditRow label="Date of Birth" icon={<Moon size={14}/>} val={astro.dob} category="astro" field="dob" />
            <EditRow label="Gothra" icon={<User size={14}/>} val={astro.gothra} category="astro" field="gothra" />
            <EditRow label="Raasi" icon={<Star size={14}/>} val={astro.raasi} category="astro" field="raasi" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfileAboutEdit;