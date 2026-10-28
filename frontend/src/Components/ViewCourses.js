import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function ViewCourses() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Your Courses</h1>
          <p className="text-muted mb-0 small">Manage and inspect all currently active modules.</p>
        </div>
        <button onClick={() => navigate('/teacher-portal/create-course')} className="btn btn-success btn-sm rounded-3">
          <FaPlus className="me-1" /> Add Course
        </button>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Course Code</th>
                <th className="py-3">Title</th>
                <th className="py-3">Students</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-bold text-success">#CS-101</td>
                <td>MERN Stack with NextJS</td>
                <td>64</td>
                <td><span className="badge bg-success bg-opacity-10 text-success">Active</span></td>
                <td className="text-end px-3">
                  <button className="btn btn-sm btn-light border">Manage</button>
                </td>
              </tr>
              <tr>
                <td className="px-3 fw-bold text-success">#DS-402</td>
                <td>Algorithmic Data Structures</td>
                <td>45</td>
                <td><span className="badge bg-success bg-opacity-10 text-success">Active</span></td>
                <td className="text-end px-3">
                  <button className="btn btn-sm btn-light border">Manage</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}