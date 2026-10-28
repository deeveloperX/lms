import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaSignInAlt, FaShieldAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student' // default role selection matching your User schema role field
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Example API call integration placeholder matching UserModel authentication:
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Logging in with User Schema Data:', formData);
      alert(`Logged in successfully as ${formData.role}!`);

      // Role-based redirection based on selection or backend response
      if (formData.role === 'teacher') {
        navigate('/teacher-portal');
      } else {
        navigate('/student-portal');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid credentials or network error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100 justify-content-center align-items-center py-5 px-3" style={{ backgroundColor: '#f8fafc', color: '#1e293b' }}>
      <div className="bg-white p-4 p-sm-5 rounded-4 shadow-sm border border-light" style={{ maxWidth: '440px', width: '100%' }}>
        
        {/* Header Branding */}
        <div className="text-center mb-4">
          <div className="bg-success bg-opacity-10 p-3 rounded-4 d-inline-flex text-success fs-3 mb-3 shadow-sm">
            <FaShieldAlt />
          </div>
          <h1 className="h4 fw-bold text-dark mb-1">Welcome Back</h1>
          <p className="text-muted small mb-0">Sign in to access your Learning Management Portal</p>
        </div>
        {/* these quick portal links are temporary and will be replaced the backend authentication is set up */}
          <div className='mb-3 d-flex flex-row align-items-center gap-2'>
            <Link to={`/teacher-portal`} className='btn btn-danger w-100 py-1 rounded-3 fw-semibold shadow-sm' style={{fontSize:"12px"}}>Quick Teacher Portal</Link>
            <Link to={`/student-portal`} className='btn btn-danger w-100 py-1 rounded-3 fw-semibold shadow-sm' style={{fontSize:"12px"}}>Quick Student Portal</Link>
          </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          
          {/* Role Selector (Maps to UserModel role field) */}
          <div className="mb-3">
            <label className="form-label fw-semibold small">Portal Role</label>
            <select 
              name="role"
              className="form-select rounded-3 py-2"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="student">Student Portal</option>
              <option value="teacher">Teacher Portal</option>
            </select>
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label className="form-label fw-semibold small">Email Address</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3 text-muted">
                <FaEnvelope />
              </span>
              <input 
                type="email" 
                name="email"
                className="form-control border-start-0 rounded-end-3 py-2" 
                placeholder="name@example.com" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="form-label fw-semibold small">Password</label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 rounded-start-3 text-muted">
                <FaLock />
              </span>
              <input 
                type="password" 
                name="password"
                className="form-control border-start-0 rounded-end-3 py-2" 
                placeholder="Enter your password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          {/* Submit Button */}
          <button 
            type="submit" 
            className="btn btn-success w-100 py-2 rounded-3 fw-semibold d-flex align-items-center justify-content-center gap-2 shadow-sm" 
            disabled={loading}
          >
            <FaSignInAlt /> {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        {/* Optional Footer Link for Registration */}
        <div className="text-center mt-4 pt-3 border-top border-light">
          <span className="text-muted small">Don't have an account? </span>
          <Link to="/register" className="text-success text-decoration-none fw-semibold small">
            Register here
          </Link>
        </div>

      </div>
    </div>
  );
}