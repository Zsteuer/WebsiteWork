import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class ButtonWithIframe extends Component{
    render(){
        return(
            <Button variant={this.props.variant} size="lg"  onClick = {this.props.onClickFunc}>{this.props.text}</Button>
        )
    }
}

export default ButtonWithIframe;