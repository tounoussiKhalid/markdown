import React from 'react';
import MDReactComponent from 'markdown-react-js';

class Output extends React.Component{
    render(){
        return(
            <div className="Output">
                <h2>Resultat</h2>
                <MDReactComponent text= {this.props.res} />
               
            </div>
        );
    }
}

export default Output;