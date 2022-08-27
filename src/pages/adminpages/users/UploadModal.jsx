import React from "react";
import { Modal } from "react-bootstrap";
import BulkUpload from "./bulkupload/BulkUpload";
import FormContainer from "./singleupload/FormContainer";

function UploadModal({ show, handleClose, title, uploadType, userType }) {
  return (
    <Modal show={show} size="lg" fullscreen={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {uploadType === "singleReg" ? (
          <FormContainer userType={userType} handleClose={handleClose} />
        ) : (
          <BulkUpload userType={userType} />
        )}
      </Modal.Body>
    </Modal>
  );
}

export default UploadModal;
