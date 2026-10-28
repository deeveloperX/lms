import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function EnrollCourses() {
  const [loadingId, setLoadingId] = useState(null);

  const handleEnroll = async (courseId, courseName) => {
    setLoadingId(courseId);
    try {
      // Example API call integration placeholder mapping to CourseModel user_id array:
      // await fetch(`/api/courses/${courseId}/enroll`, { method: 'POST' });
      
      console.log('Enrolling student into Course ID:', courseId);
      alert(`Successfully enrolled in "${courseName}"!`);
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert('Failed to enroll.');
    } finally {
      setLoadingId(null);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Enroll in Courses</h1>
          <p className="text-muted mb-0 small">Browse available curriculum modules and enroll instantly.</p>
        </div>
      </div>

      <div className="bg-white rounded-4 shadow-sm border border-light overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th className="py-3 px-3">Course Code</th>
                <th className="py-3">Title</th>
                <th className="py-3">Description</th>
                <th className="py-3 text-end px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 fw-bold text-success">#CS-101</td>
                <td>MERN Stack with NextJS</td>
                <td>Learn modern state management and scalable backend architecture.</td>
                <td className="text-end px-3">
                  <button 
                    className="btn btn-sm btn-success px-3 rounded-3 d-inline-flex align-items-center gap-1"
                    onClick={() => handleEnroll('cs101_id', 'MERN Stack with NextJS')}
                    disabled={loadingId === 'cs101_id'}
                  >
                    <FaPlus /> {loadingId === 'cs101_id' ? 'Enrolling...' : 'Enroll'}
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-3 fw-bold text-success">#DS-402</td>
                <td>Algorithmic Data Structures</td>
                <td>Master advanced data structures and algorithmic efficiency.</td>
                <td className="text-end px-3">
                  <button 
                    className="btn btn-sm btn-success px-3 rounded-3 d-inline-flex align-items-center gap-1"
                    onClick={() => handleEnroll('ds402_id', 'Algorithmic Data Structures')}
                    disabled={loadingId === 'ds402_id'}
                  >
                    <FaPlus /> {loadingId === 'ds402_id' ? 'Enrolling...' : 'Enroll'}
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