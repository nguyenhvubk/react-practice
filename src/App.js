import logo from './logo.svg';
import './App.css';
import Parent from './components/Parent'
import React from 'react';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      parent1: {
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Parent 
          show1={this.state.parent1.modals[0].isShow}
          handleShow1={() => this.handleShowParent1(true, 0)}
          handleClose1={() => this.handleShowParent1(false, 0)}

          show2={this.state.parent1.modals[1].isShow}
          handleShow2={() => this.handleShowParent1(true, 1)}
          handleClose2={() => this.handleShowParent1(false, 1)}

          show3={this.state.parent1.modals[2].isShow}
          handleShow3={() => this.handleShowParent1(true, 2)}
          handleClose3={() => this.handleShowParent1(false, 2)}
        />
      </div>
    );
  }
}

export default App;
