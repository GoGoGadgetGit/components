import React, { Component } from 'react';
// import ReactStars from 'react-stars';
// import { render } from 'react-dom';

class Star extends Component {
    render() {
        
        if (this.props.fill) { // Return the filled in star
            return (
                <span className="star" onMouseOver={() => this.props.onHover()}>
                    &#9733;
                </span>
            );
        } else { // Return the empty star
            return (
                <span className="star" onMouseOver={() => this.props.onHover()}>
                    &#9734;
                </span>
            );
        }
    }
}

export default Star;