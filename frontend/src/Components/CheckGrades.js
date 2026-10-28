import React from 'react';

export default function CheckGrades() {
  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Check Grades & Feedback</h1>
          <p className="text-muted mb-0 small">Inspect your evaluated scores and instructor feedback.</p>
        </div>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Assignment</th>
                <th className="py-3">Submission Date</th>
                <th className="py-3">Obtained Marks</th>
                <th className="py-3 text-end px-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-semibold">State Management Lab</td>
                <td>Oct 26, 2026</td>
                <td><span className="fw-bold text-success">98 / 100</span></td>
                <td className="text-end px-3">
                  <span className="badge bg-success bg-opacity-10 text-success">Graded</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}