import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Detail(std) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <>
         <button className='btn btn-info' onClick={handleShow}>
            View Details
            </button>
            <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Employee Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <h1>{std.name}</h1>
                            <h3>Age:{std.age}</h3>
                            <h3>Phone:{std.phone}</h3>
                            <h3>email:{std.email}</h3>
                            <h3>Department:{std.department}</h3>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
      </Modal>
         
        </>
    </>
  )
}

export default Detail