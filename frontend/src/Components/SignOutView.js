import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function SignOutView() {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-5 rounded-4 shadow-sm border border-light text-center py-5">
      <div className="mb-3 text-danger fs-1">
        <FaSignOutAlt />
      </div>
      <h3 className="h4 fw-bold text-dark mb-2">Ready to Leave?</h3>
      <p className="text-muted mb-4">You will be securely logged out of your Teacher Portal session.</p>
      <div className="d-flex justify-content-center gap-3">
        <button onClick={() => navigate('/teacher-portal')} className="btn btn-light border px-4 rounded-3">Cancel</button>
        <button onClick={() => navigate('/')} className="btn btn-danger px-4 rounded-3">Confirm Sign Out</button>
      </div>
    </div>
  );
}