import ModalContainer from './ModalContainer.js'
import React, { useState } from 'react';

function Parents() {

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  return (
    <div>
      <ModalContainer 
        title='modal1'
        show={show1}
        handleShow={() => setShow1(true)}  
        handleClose ={() => setShow1(false)}    
      />
      <ModalContainer 
        title='modal2'
        show={show2}
        handleShow={() => setShow2(true)}  
        handleClose ={() => setShow2(false)}  
      />
      <ModalContainer 
        title='modal3'
        show={show3}
        handleShow={() => setShow3(true)}  
        handleClose ={() => setShow3(false)}  
      />
    </div>
  );
}

export default Parents;