import React from 'react';
import Ccomponent from './Components/Ccomponent';
import Fcomponent from './Components/Fcomponent';
import './style.css'



class App extends React.Component {
  state = {
    fCompo: false,
    cCompo: false
  };

  clickHandler1() {
    // console.log(this);
    this.setState({
      fCompo: !this.state.fCompo
    })
  }
  clickHandler2() {
    this.setState({
      cCompo: !this.state.cCompo
    })
  }

  render() {
    return (
      <>
        <h1 className='header'>Styling using Functional and Class Component</h1>

        <button className='fcbutton' onClick={() => this.clickHandler1()}>To see styling in functional component</button>
        <button className='ccbutton' onClick={() => this.clickHandler2()}>To see styling in class component</button>
        <div className='boxparent'>
          {this.state.fCompo ? <Fcomponent /> : null}
          {this.state.cCompo ? <Ccomponent /> : null}
        </div>



      </>
    )
  }
}

export default App;

