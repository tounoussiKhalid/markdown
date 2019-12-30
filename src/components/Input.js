import React from 'react';

class Input extends React.Component{
    render(){
        return(
            <div className="Input inline">
                <textarea rows="35" cols="45" onChange={this.props.handleChange}></textarea>
            </div>
        );
    }
}

export default Input;