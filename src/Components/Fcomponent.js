import React from 'react';

const inlineStyling = {
    color : "blue"
}
function Fcomponent() {
    return (
        <>
            <div className='box1'>
                <h1>This is created using functional component</h1>
                <p> This is done using external css</p>
                <p style= {inlineStyling}> This is done using inline css</p>
            </div>
        </>
    )
}
export default Fcomponent;