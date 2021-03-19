import ModalContainer from './ModalContainer.js'
import React from 'react';
import './style/Parent.css'

class Parent2 extends React.Component {
  render (){
    if (Array.isArray(this.props.modals)) {
      return(
        <div className='Parent'>
          <h1>{this.props.name}</h1>
          {this.props.modals.map((modal,index) => {
            return (
              <ModalContainer
                title={modal.title}
                message={modal.message}
                show={modal.isShow}
                handleShow={() => this.props.handleShow(true, index)}  
                handleClose={() => this.props.handleClose(false, index)} 
              />
            )
          })}
        </div>
      );
    }
  }
}

export default Parent2;