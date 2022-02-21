import React, { Component } from 'react';

const inlineStyling = {
    color : "red"
}

class Ccomponent extends Component {
    render () {
        return (
            <>
                <div className='box2'>
                    <h1>This is created using class component</h1>
                    <p> This is done using external css</p>
                    <p style= {inlineStyling}> This is done using inline css</p>
                </div>
            </>
        )
    }
}
export default Ccomponent;

