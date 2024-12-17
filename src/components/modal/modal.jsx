import { useState } from "react";

import { Badge, Button, Modal, ListGroup } from "react-bootstrap";

export default function ModalComponent({ notifications }) {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(notifications?.length);
  // const [notifications, setNotifications] = useState(init);
  const handleClose = () => {
    setShow(false);
    //setNotifications([]);
  };
  const handleShow = () => {
    setShow(true);
    setCount(0);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Notifications <Badge bg="secondary">{notifications?.length}</Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Notifications</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {notifications?.length > 0 ? (
            <ListGroup>
              {notifications.map((notification, index) => (
                <ListGroup.Item key={index}>
                  <strong>{notification.date}:</strong> {notification.message}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>No notifications</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
