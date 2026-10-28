import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import {
  FaHome, FaChartBar, FaUsers, FaCog, FaSignOutAlt, FaShieldAlt
} from 'react-icons/fa';

const menuItems = [
  { path: '/teacher-portal', label: 'Dashboard', icon: FaHome, end: true },
  { path: '/teacher-portal/create-course', label: 'Create Courses', icon: FaChartBar },
  { path: '/teacher-portal/view-courses', label: 'View Courses', icon: FaUsers },
  { path: '/teacher-portal/create-assignment', label: 'Create Assignment', icon: FaChartBar },
  { path: '/teacher-portal/view-assignment', label: 'View Assignment', icon: FaUsers },
  { path: '/teacher-portal/grade-assignments', label: 'Grade Assignments', icon: FaCog },
  { path: '/teacher-portal/signout', label: 'Sign Out', icon: FaSignOutAlt, signOut: true }
];

export default function TeacherPortal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#f8fafc', color: '#1e293b' }}>

      <div className="container-fluid flex-grow-1 py-4 px-3 px-lg-5">
        <div className="row g-4">
          <div className={`col-md-3 col-lg-3 ${sidebarOpen ? 'd-block' : 'd-none d-md-block'}`}>
            <aside className="bg-white rounded-4 p-3 shadow-sm border border-light sticky-top" style={{ top: '90px' }}>
              <div className="text-uppercase text-muted fw-bold px-2 mb-3" style={{ fontSize: '11px', letterSpacing: '0.05em' }}>
                Main Menu
              </div>
              <ul className="nav flex-column gap-1">
                {menuItems.map(({ path, label, icon: Icon, end, signOut }) => (
                  <li className="nav-item" key={path}>
                    <NavLink
                      to={path}
                      end={end}
                      onClick={() => setSidebarOpen(false)}
                      className={({ isActive }) => `w-100 text-start btn rounded-3 px-3 py-2 d-flex align-items-center gap-3 fw-semibold border-0 ${
                        isActive
                          ? `${signOut ? 'bg-danger' : 'bg-success'} text-white shadow-sm`
                          : 'text-secondary bg-transparent'
                      }`}
                    >
                      {({ isActive }) => (
                        <>
                          <Icon className={isActive ? 'text-white' : signOut ? 'text-muted' : 'text-success'} />
                          {label}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <hr className="my-4 text-muted opacity-25" />

              <div className="bg-light p-3 rounded-4 text-center border border-light">
                <FaShieldAlt className="text-success mb-2 fs-4" />
                <div className="fw-bold text-dark small">Secure Cluster</div>
                <div className="text-muted" style={{ fontSize: '11px' }}>
                  All operational nodes running at peak efficiency.
                </div>
              </div>
            </aside>
          </div>

          <main className="col-md-9 col-lg-9">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
