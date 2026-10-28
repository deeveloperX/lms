import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export default function GradeSubmissionModal({ submission, onClose }) {
  const [score, setScore] = useState('');
  const [feedback, setFeedback] = useState('');
  const isEditing = submission?.score !== undefined;

  useEffect(() => {
    setScore(submission?.score ?? '');
    setFeedback(submission?.feedback ?? '');
  }, [submission]);

  const saveGrade = (event) => {
    event.preventDefault();
    onClose();
  };

  return (
    <Modal show={submission !== null} onHide={onClose} centered>
      <Form onSubmit={saveGrade}>
        <Modal.Header closeButton>
          <Modal.Title>{isEditing ? 'Edit Grade' : 'Evaluate Submission'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submission && (
            <>
              <p className="text-muted mb-3">
                {submission.student} · {submission.assignment}
              </p>
              <Form.Group controlId="submission-score" className="mb-3">
                <Form.Label>Score (out of 100)</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="100"
                  value={score}
                  onChange={(event) => setScore(event.target.value)}
                  placeholder="Enter a score"
                  required
                />
              </Form.Group>
              <Form.Group controlId="submission-feedback">
                <Form.Label>Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={feedback}
                  onChange={(event) => setFeedback(event.target.value)}
                  placeholder="Add feedback for the student"
                />
              </Form.Group>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={onClose}>Cancel</Button>
          <Button variant="success" type="submit">
            {isEditing ? 'Update Grade' : 'Save Grade'}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
