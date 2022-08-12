import React from "react";
import { Modal } from "react-bootstrap";
import FormContainer from "./FormContainer";

function UploadModal({ show, handleClose, title }) {
  return (
    <Modal show={show} size="lg" fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormContainer />
      </Modal.Body>
    </Modal>
  );
}

export default UploadModal;
