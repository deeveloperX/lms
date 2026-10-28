import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function CreateCourse() {
  const [formData, setFormData] = useState({
    name: '',
    code: '',
    description: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Example API call integration placeholder:
      // const response = await fetch('/api/courses', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
      console.log('Submitting Course Schema Data:', formData);
      alert(`Course "${formData.name}" created successfully!`);
      setFormData({ name: '', code: '', description: '' });
    } catch (error) {
      console.error('Error creating course:', error);
      alert('Failed to create course.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4 bg-white p-4 rounded-4 shadow-sm border border-light">
        <div>
          <h1 className="h4 mb-1 fw-bold text-dark">Create New Course</h1>
          <p className="text-muted mb-0 small">Publish a curriculum mapped to your database schema.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-sm border border-light">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8 mb-3">
              <label className="form-label fw-semibold small">Course Name</label>
              <input 
                type="text" 
                name="name"
                className="form-control rounded-3" 
                placeholder="e.g., MERN Stack with NextJS" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className="form-label fw-semibold small">Course Code</label>
              <input 
                type="text" 
                name="code"
                className="form-control rounded-3" 
                placeholder="e.g., #CS-101" 
                value={formData.code}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label fw-semibold small">Course Description</label>
            <textarea 
              name="description"
              className="form-control rounded-3" 
              rows="4" 
              placeholder="Provide a summary of learning objectives..."
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-success px-4 rounded-3 d-flex align-items-center gap-2" disabled={loading}>
            <FaPlus /> {loading ? 'Publishing...' : 'Publish Course'}
          </button>
        </form>
      </div>
    </div>
  );
}