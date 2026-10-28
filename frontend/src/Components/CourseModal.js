import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function CourseModal({ course, onClose }) {
  return (
    <Modal show={course !== null} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Course Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {course && (
          <>
            <div className="mb-3">
              <div className="small text-muted">Course Name</div>
              <div className="fw-semibold">{course.name}</div>
            </div>
            <div className="mb-3">
              <div className="small text-muted">Course Code</div>
              <div className="fw-semibold">{course.code}</div>
            </div>
            <div>
              <div className="small text-muted">Description</div>
              <p className="mb-0">{course.description}</p>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
