import React from 'react';
import { FaBook, FaTasks, FaUsers, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function TeacherDashboardHome() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Welcome Header */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Welcome back, Professor!</h1>
          <p className="text-muted mb-0 small">Here is a quick overview of your active courses, student submissions, and pending grading tasks.</p>
        </div>
        <div className="d-flex gap-2">
          <button 
            onClick={() => navigate('/teacher-portal/create-course')} 
            className="btn btn-success btn-sm rounded-3 d-flex align-items-center gap-2 px-3 py-2"
          >
            <FaPlus /> Create Course
          </button>
        </div>
      </div>

      {/* Quick Statistics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-sm-6 col-xl-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light h-100 d-flex align-items-center gap-3">
            <div className="bg-success bg-opacity-10 p-3 rounded-4 text-success fs-4">
              <FaBook />
            </div>
            <div>
              <div className="text-muted small fw-semibold">Active Courses</div>
              <div className="h4 mb-0 fw-bold text-dark">2</div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light h-100 d-flex align-items-center gap-3">
            <div className="bg-warning bg-opacity-10 p-3 rounded-4 text-warning fs-4">
              <FaTasks />
            </div>
            <div>
              <div className="text-muted small fw-semibold">Pending Grades</div>
              <div className="h4 mb-0 fw-bold text-dark">1</div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xl-4">
          <div className="bg-white p-4 rounded-4 shadow-sm border border-light h-100 d-flex align-items-center gap-3">
            <div className="bg-success bg-opacity-10 p-3 rounded-4 text-success fs-4">
              <FaUsers />
            </div>
            <div>
              <div className="text-muted small fw-semibold">Total Students</div>
              <div className="h4 mb-0 fw-bold text-dark">109</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Submissions Needing Review */}
      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="p-4 border-bottom border-light d-flex justify-content-between align-items-center">
          <h2 className="h6 mb-0 fw-bold text-dark">Recent Submissions to Evaluate</h2>
          <button 
            onClick={() => navigate('/teacher-portal/grade-assignments')} 
            className="btn btn-link btn-sm text-success text-decoration-none fw-semibold p-0"
          >
            View All
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Student Name</th>
                <th className="py-3">Assignment</th>
                <th className="py-3">Submission Date</th>
                <th className="py-3 text-end px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-semibold">Mahad Raja</td>
                <td>State Management Lab</td>
                <td>Oct 26, 2026</td>
                <td className="text-end px-3">
                  <button 
                    onClick={() => navigate('/teacher-portal/grade-assignments')} 
                    className="btn btn-sm btn-success px-3"
                  >
                    Evaluate
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}