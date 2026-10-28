import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';

export default function CreateAssignment() {
  const [formData, setFormData] = useState({
    title: '',
    due_date: '',
    total_marks: '',
    course_id: '' // references courses collection _id
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Submitting Assignment Schema Data:', formData);
      alert(`Assignment "${formData.title}" posted successfully!`);
      setFormData({ title: '', due_date: '', total_marks: '', course_id: '' });
    } catch (error) {
      console.error('Error creating assignment:', error);
      alert('Failed to post assignment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Create New Assignment</h1>
          <p className="text-muted mb-0 small">Set deadlines and task parameters mapped to database requirements.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold small">Assignment Title</label>
            <input 
              type="text" 
              name="title"
              className="form-control rounded-3" 
              placeholder="e.g., Build a Custom React Hook System" 
              value={formData.title}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-semibold small">Target Course (Course ID)</label>
              <select 
                name="course_id"
                className="form-select rounded-3"
                value={formData.course_id}
                onChange={handleChange}
                required
              >
                <option value="">-- Select Course --</option>
                {/* Dynamically map your fetched course documents here */}
                <option value="64a8fb21c9... (Course ObjectId)">MERN Stack with NextJS (#CS-101)</option>
                <option value="64a8fb21c9... (Course ObjectId)">Algorithmic Data Structures (#DS-402)</option>
              </select>
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-semibold small">Due Date</label>
              <input 
                type="date" 
                name="due_date"
                className="form-control rounded-3"
                value={formData.due_date}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="col-md-3 mb-3">
              <label className="form-label fw-semibold small">Total Marks</label>
              <input 
                type="text" 
                name="total_marks"
                className="form-control rounded-3" 
                placeholder="e.g., 100" 
                value={formData.total_marks}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-success px-4 rounded-3 d-flex align-items-center gap-2 mt-2" disabled={loading}>
            <FaClipboardList /> {loading ? 'Posting...' : 'Post Assignment'}
          </button>
        </form>
      </div>
    </div>
  );
}   