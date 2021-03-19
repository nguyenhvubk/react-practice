import ModalContainer from './ModalContainer.js'
import React from 'react';

function Parent(props) {

  // const message = "Let's drunk";
  return (
    <div>
      <ModalContainer 
        title={props.title1}
        message={props.message1}
        show={props.show1}
        handleShow={props.handleShow1}  
        handleClose ={props.handleClose1}    
      />
      <ModalContainer 
        title={props.title2}
        message={props.message2}
        show={props.show2}
        handleShow={props.handleShow2}  
        handleClose ={props.handleClose2}  
      />
      <ModalContainer 
        title={props.title3}
        message={props.message3}
        show={props.show3}
        handleShow={props.handleShow3}  
        handleClose ={props.handleClose3}  
      />
    </div>
  );
}

export default Parent;