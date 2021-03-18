import ModalContainer from './ModalContainer.js'
import React, { useState } from 'react';

function Parents(props) {

  // const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const message = "Let's drunk";
  return (
    <div>
      <ModalContainer 
        title='modal1'
        message={message}
        show={props.show1}
        handleShow={props.handleShow1}  
        handleClose ={props.handleClose1}    
      />
      <ModalContainer 
        title='modal2'
        show={props.show2}
        handleShow={props.handleShow2}  
        handleClose ={props.handleClose2}  
      />
      <ModalContainer 
        title='modal3'
        show={props.show3}
        handleShow={props.handleShow3}  
        handleClose ={props.handleClose3}  
      />
    </div>
  );
}

export default Parents;