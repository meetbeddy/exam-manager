import React from "react";
import { Modal } from "react-bootstrap";

function BasicModal({ show, handleClose, title, id, ...props }) {
  return (
    <Modal id={id} show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body> {props.children}</Modal.Body>
    </Modal>
  );
}

export default BasicModal;
