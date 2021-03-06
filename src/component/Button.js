import React, {Component}  from 'react';

class Button extends Component {

    render(props) {
        return (
            <div className={`column-${this.props.cols}`}>
                <button className='calc-button' 
                    onClick={(e) => this.props.action(this.props.symbol)}> 
                    {this.props.symbol}</button>
            </div>
        );
    }

}

export default Button;