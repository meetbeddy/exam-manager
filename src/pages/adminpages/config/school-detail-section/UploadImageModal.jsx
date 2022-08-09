import React from "react";
import ImagePreview from "./ImagePreview";
import { Modal } from "react-bootstrap";
import { MedButton } from "../../../../components/buttons/buttons";

function UploadImageModal({ handleClose, show }) {
  const [postData, setPostData] = React.useState({
    profileImage: "",
  });

  const handleFileselect = async (e) => {
    const file = e.target?.files[0];
    setPostData({
      ...postData,

      imageURL: URL.createObjectURL(file),
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPostData({
        ...postData,
        profileImage: reader.result,
        imageURL: URL.createObjectURL(file),
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("school-badge", postData.imageURL);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Image Upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="card d-flex flex-column text-center ">
          <form className="mx-auto">
            {postData.imageURL && <ImagePreview url={postData.imageURL} />}

            <input
              type="file"
              className="custom-file-input border-0 m-0"
              id="file-input"
              onChange={(e) => handleFileselect(e)}
            />

            <MedButton
              className="btn btn-light btn-outline rounded-pill"
              border="#6e6b7b"
              onClick={handleSubmit}
            >
              upload
            </MedButton>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadImageModal;
