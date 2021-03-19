import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './style/ModalContainer.css'

function ModalContainer(props) { 
  return (
    <div className='ModalContainer'>
      <Button variant="primary" onClick={props.handleShow}>
        Launch demo modal
        {/*TODO*/}
      </Button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message ? props.message : "Woohoo, you're reading this text in a modal!"}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalContainer;