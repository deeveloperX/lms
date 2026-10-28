import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

export default function SubmitAssignment() {
  const [formData, setFormData] = useState({
    assignment_id: '',
    answer: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example API call integration mapping to submit_assignments schema:
      // const response = await fetch('/api/submit-assignments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Submitting Answer Schema Data:', formData);
      alert('Assignment submitted successfully!');
      setFormData({ assignment_id: '', answer: '' });
    } catch (error) {
      console.error('Error submitting assignment:', error);
      alert('Failed to submit assignment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Submit Assignment</h1>
          <p className="text-muted mb-0 small">Upload your repository link or solution text for evaluation.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Select Assignment</label>
            <select 
              name="assignment_id"
              className="form-select rounded-3"
              value={formData.assignment_id}
              onChange={handleChange}
              required
            >
              <option value="">Choose assignment...</option>
              <option value="asg_101">State Management Lab (Due: Oct 30, 2026)</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold small">Repository URL / Answer Text</label>
            <textarea 
              name="answer"
              className="form-control rounded-3" 
              rows="5" 
              placeholder="Paste your GitHub repository link or solution notes here..."
              value={formData.answer}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success px-4 rounded-3 d-flex align-items-center gap-2" disabled={loading}>
            <FaUpload /> {loading ? 'Submitting...' : 'Submit Assignment'}
          </button>
        </form>
      </div>
    </div>
  );
}