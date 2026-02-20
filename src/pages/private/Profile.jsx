import React from 'react';

import ProfileEditForm from '../../components/ProfileStruc/Profile/ProfileEditForm';
import ProfilePreview  from '../../components/ProfileStruc/Profile/ProfilePreview';


const Profile = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT: Edit Form */}
        <div className="lg:w-1/2">
          <ProfileEditForm />
        </div>

        {/* RIGHT: Live Preview */}
        <div className="lg:w-1/2">
          <ProfilePreview />
        </div>

      </div>
    </div>
  );
};

export default Profile;





