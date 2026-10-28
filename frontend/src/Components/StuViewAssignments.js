import React from 'react';
import { useNavigate } from 'react-router';

export default function ViewAssignments() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Course Assignments</h1>
          <p className="text-muted mb-0 small">Review upcoming tasks, due dates, and total marks.</p>
        </div>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Assignment Title</th>
                <th className="py-3">Due Date</th>
                <th className="py-3">Total Marks</th>
                <th className="py-3 text-end px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-semibold">State Management Lab</td>
                <td>Oct 30, 2026</td>
                <td>100</td>
                <td className="text-end px-3">
                  <button 
                    onClick={() => navigate('/student-portal/submit-assignment')} 
                    className="btn btn-sm btn-success px-3"
                  >
                    Submit
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