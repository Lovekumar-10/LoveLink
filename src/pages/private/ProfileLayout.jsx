
// src/pages/private/ProfileLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-main)] p-2 md:p-3">
      <div className="max-w-7xl mx-auto">
       

        {/* Outlet will render either ProfilePreview or ProfileEditForm */}
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;