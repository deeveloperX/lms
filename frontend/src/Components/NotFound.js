import React from "react";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      style={{ backgroundColor: "#f8fafc", color: "#1e293b" }}
    >
      <div
        className="bg-white p-5 rounded-4 shadow-sm border border-light text-center"
        style={{ maxWidth: "480px", width: "100%" }}
      >
        <div className="bg-danger bg-opacity-10 p-4 rounded-circle d-inline-flex text-danger mb-4 fs-2">
          <FaExclamationTriangle />
        </div>

        <h1 className="h3 fw-bold text-dark mb-2">Page Not Found</h1>
        <p className="text-muted small mb-4">
          The page you are looking for doesn't exist, has been moved, or you
          lack permission to access this portal route.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-light border rounded-3 px-4 py-2 d-inline-flex align-items-center justify-content-center gap-2 fw-semibold small"
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    </div>
  );
}
