import React, { Component } from 'react';

class DropdownItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            light: false
        }

    }

    lightsOn() {
        this.setState({light: true});

    }

    lightsOff() {
        this.setState({light: false});

    }

    message() {
        console.log(this.props.textLabel);
    }

    render() {
        let styles = {};

        if (this.state.light === true) {
            styles.backgroundColor = 'yellow';
        }

        return(
            <div style={styles} className='item' onMouseOver={() => this.lightsOn()} onMouseOut={() => this.lightsOff()} onClick={() => this.message()}>
            {this.props.textLabel}
            </div>
        );
    }
}

export default DropdownItem;

