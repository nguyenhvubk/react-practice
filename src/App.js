import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent'
import React from 'react';
import { PARENT1_MODAL_CONTENTS, PARENT2_MODAL_CONTENTS } from './constants'

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parent1: {
        modals: [
          {
            isShow: PARENT1_MODAL_CONTENTS[0].isShow,
            title: PARENT1_MODAL_CONTENTS[0].title,
            message: PARENT1_MODAL_CONTENTS[0].message 
          },
          {
            isShow: PARENT1_MODAL_CONTENTS[1].isShow,
            title: PARENT1_MODAL_CONTENTS[1].title,
            message: PARENT1_MODAL_CONTENTS[1].message
          },
          {
            isShow: PARENT1_MODAL_CONTENTS[2].isShow,
            title: PARENT1_MODAL_CONTENTS[2].title,
            message: PARENT1_MODAL_CONTENTS[2].message
          }
        ]
      },
      parent2: {
        modals: [
          {
            isShow: false,
            title: 'modal11',
            message: 'message11'
          },
          {
            isShow: false,
            title: 'modal12',
            message: 'message12'
          },
          {
            isShow: false,
            title: 'modal13',
            message: 'message13'
          }
        ],
      },
    };
  }

  handleShowParent1(i,key) {
    this.setState(prevState => ({
      parent1: {
        ...prevState.parent1,
        modals: prevState.parent1.modals.map(
          (ls, index) => index === key? {...ls, isShow: i}: ls
        )
      }
    }))
  }

  handleShowParent2(i,key) {
    this.setState(prevState => ({
      parent2: {
        ...prevState.parent2,
        modals: prevState.parent2.modals.map(
          (ls, index) => index === key? {...ls, isShow: i}: ls
        )
      }
    }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="Parents-container">
          <Parent 
            title1={this.state.parent1.modals[0].title}
            message1={this.state.parent1.modals[0].message}
            show1={this.state.parent1.modals[0].isShow}
            handleShow1={() => this.handleShowParent1(true, 0)}
            handleClose1={() => this.handleShowParent1(false, 0)}

            title2={this.state.parent1.modals[1].title}
            message2={this.state.parent1.modals[1].message}
            show2={this.state.parent1.modals[1].isShow}
            handleShow2={() => this.handleShowParent1(true, 1)}
            handleClose2={() => this.handleShowParent1(false, 1)}

            title3={this.state.parent1.modals[2].title}
            message3={this.state.parent1.modals[2].message}
            show3={this.state.parent1.modals[2].isShow}
            handleShow3={() => this.handleShowParent1(true, 2)}
            handleClose3={() => this.handleShowParent1(false, 2)}
          />
          <Parent 
            show1={this.state.parent2.modals[0].isShow}
            handleShow1={() => this.handleShowParent2(true, 0)}
            handleClose1={() => this.handleShowParent2(false, 0)}

            show2={this.state.parent2.modals[1].isShow}
            handleShow2={() => this.handleShowParent2(true, 1)}
            handleClose2={() => this.handleShowParent2(false, 1)}

            show3={this.state.parent2.modals[2].isShow}
            handleShow3={() => this.handleShowParent2(true, 2)}
            handleClose3={() => this.handleShowParent2(false, 2)}
          />
        </div>
      </div>
    );
  }
}

export default App;
