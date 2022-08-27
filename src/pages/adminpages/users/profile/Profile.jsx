import React from "react";
import { Modal } from "react-bootstrap";
import ProfileCard from "./ProfileCard";

function Profile({ show, handleClose, profile, userType }) {
  return (
    <Modal show={show} size="xl" onHide={handleClose}>
      <Modal.Header closeButton className="m-0">
        <Modal.Title className="text-uppercase">
          {userType} - profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileCard profile={profile} userType={userType} />
      </Modal.Body>
    </Modal>
  );
}

export default Profile;
