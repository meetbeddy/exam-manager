import React from "react";
import { Modal } from "react-bootstrap";

function BasicModal({ show, handleClose, title, ...props }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body> {props.children}</Modal.Body>
    </Modal>
  );
}

export default BasicModal;
