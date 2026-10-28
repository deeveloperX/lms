import React, { useState } from 'react';
import GradeSubmissionModal from './GradeSubmissionModal';

export default function GradeAssignments() {
  const [selectedSubmission, setSelectedSubmission] = useState(null);

  const openGradingModal = (submission) => {
    setSelectedSubmission(submission);
  };

  const closeGradingModal = () => {
    setSelectedSubmission(null);
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Grade Student Submissions</h1>
          <p className="text-muted mb-0 small">Review uploaded student repositories and assign final grades.</p>
        </div>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Student Name</th>
                <th className="py-3">Assignment</th>
                <th className="py-3">Submission Date</th>
                <th className="py-3">Current Score</th>
                <th className="py-3 text-end px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-semibold">Jessica Miller</td>
                <td>State Management Lab</td>
                <td>Oct 26, 2026</td>
                <td><span className="badge bg-warning bg-opacity-10 text-warning">Pending Review</span></td>
                <td className="text-end px-3">
                  <button
                    className="btn btn-sm btn-success px-3"
                    onClick={() => openGradingModal({
                      student: 'Jessica Miller',
                      assignment: 'State Management Lab',
                    })}
                  >
                    Evaluate
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 fw-semibold">Marcus Vance</td>
                <td>State Management Lab</td>
                <td>Oct 25, 2026</td>
                <td><span className="badge bg-success bg-opacity-10 text-success">98 / 100</span></td>
                <td className="text-end px-3">
                  <button
                    className="btn btn-sm btn-light border px-3"
                    onClick={() => openGradingModal({
                      student: 'Marcus Vance',
                      assignment: 'State Management Lab',
                      score: 98,
                    })}
                  >
                    Edit Grade
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <GradeSubmissionModal
        submission={selectedSubmission}
        onClose={closeGradingModal}
      />
    </div>
  );
}