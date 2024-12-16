import { useState } from 'react';

import {
    Badge,
    Button,
    Modal,
    ListGroup 
  } from "react-bootstrap";


import data from "../../data/user_data.json";

export default function ModalComponent() {
    const [show, setShow] = useState(false);
  
    const [notifications, setNotifications] = useState(data.notifications); 
    const [count, setCount] = useState(data.notifications.length);

    const handleClose = () => {
      setShow(false);
      setNotifications([]);
    };
    const handleShow = () => {
      setShow(true);
      setCount(0);
    };

    return (
      <>
        <Button variant="primary"  onClick={handleShow}  disabled={notifications.length === 0}>
          Notifications <Badge bg="secondary">{count}</Badge>
          <span className="visually-hidden">
            unread messages
          </span>
        </Button>
  
        <Modal size="lg" show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>Notifications</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {data.notifications.length > 0 ? (
            <ListGroup>
              {notifications.map((notification, index) => (
                <ListGroup.Item key={index}>
                  <strong>{notification.date}:</strong> {notification.message}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : ( <p>No notifications</p>)
          }
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
  