import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/Action/Todoaction';

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTodo, setNewTodo] = useState(todo?.text || ''); // Check if todo exists before accessing todo.text
  const handleInput = (e) => {
    setNewTodo(e.target.value);
  };
  const dispatch = useDispatch();

  const send = () => {
    dispatch(editTodo({ id: todo.id, text: newTodo }));
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      {todo && ( // Conditionally render the modal and its contents only when todo is defined
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              size="lg"
              type="text"
              value={newTodo}
              onChange={handleInput}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={send}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default EditTodo;
