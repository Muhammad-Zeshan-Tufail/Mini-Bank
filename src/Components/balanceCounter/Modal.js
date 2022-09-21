import React from "react";
import Modal from "react-bootstrap/Modal";
import { useGlobalContext } from "../../context/BankContext";

const Popup = () => {
  const { show, handleClose } = useGlobalContext();
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="d-flex justify-content-center">
            <h3>Congratulations🎉</h3>
        </Modal.Header>
        <Modal.Body>
          <h5 className="text-center">Your Requset Completed Successfully </h5>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Popup;
