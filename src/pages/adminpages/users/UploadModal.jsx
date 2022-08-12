import React from "react";
import { Modal } from "react-bootstrap";
import FormContainer from "./FormContainer";

function UploadModal({ show, handleClose, title, uploadType, userType }) {
  return (
    <Modal show={show} size="lg" fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {uploadType === "singleReg" ? (
          <FormContainer userType={userType} />
        ) : (
          <h1>Bulk Upload coming soon</h1>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default UploadModal;
