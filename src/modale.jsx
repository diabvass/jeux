import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

export function Modals({ nomBtn, titre, body: Body }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="border-0"
        style={{ background: "var(--accent)" }}
        onClick={handleShow}
      >
        {nomBtn}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{titre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Body />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border-0"
            style={{ background: "var(--accent)" }}
            onClick={handleClose}
          >
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
