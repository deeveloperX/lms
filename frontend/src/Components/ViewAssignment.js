import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router';

export default function ViewAssignment() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Assigned Tasks Overview</h1>
          <p className="text-muted mb-0 small">Track submitted projects and target due dates.</p>
        </div>
        <button onClick={() => navigate('/teacher-portal/create-assignment')} className="btn btn-success btn-sm rounded-3">
          <FaPlus className="me-1" /> New Assignment
        </button>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Task Name</th>
                <th className="py-3">Course</th>
                <th className="py-3">Due Date</th>
                <th className="py-3">Submissions</th>
                <th className="py-3 text-end px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-semibold text-dark">State Management Lab</td>
                <td>Fullstack React</td>
                <td>Nov 05, 2026</td>
                <td><span className="badge bg-info bg-opacity-10 text-info">52 / 64</span></td>
                <td className="text-end px-3">
                  <button onClick={() => navigate('/teacher-portal/grade-assignments')} className="btn btn-sm btn-outline-success">Grade</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}