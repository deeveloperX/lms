import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CourseModal from './CourseModal';

export default function ViewEnrolledCourses() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const enrolledCourse = {
    name: 'MERN Stack with NextJS',
    code: '#CS-101',
    description: 'Learn modern state management and scalable backend architecture.',
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Enrolled Courses</h1>
          <p className="text-muted mb-0 small">Access your active learning modules and course materials.</p>
        </div>
        <button onClick={() => navigate('/student-portal/enroll-courses')} className="btn btn-success btn-sm rounded-3">
          Find More Courses
        </button>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Course Code</th>
                <th className="py-3">Title</th>
                <th className="py-3">Status</th>
                <th className="py-3 text-end px-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-bold text-success">#CS-101</td>
                <td>MERN Stack with NextJS</td>
                <td><span className="badge bg-success bg-opacity-10 text-success">Enrolled</span></td>
                <td className="text-end px-3">
                  <button
                    className="btn btn-sm btn-light border"
                    onClick={() => setSelectedCourse(enrolledCourse)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}