import React, { Component } from 'react';

import DropdownItem from './DropdownItem';

class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true
        }


    }

    showMenu() {
        if (this.state.hidden === true) {
            this.setState({ hidden: false });
        } else if (this.state.hidden === false) {
            this.setState({hidden: true});
        }
        

    }

    render() {
        let list = <ul></ul>;

        if (this.state.hidden === false) {
            list = (
                <ul>
                    <DropdownItem textLabel="New" />
                    <DropdownItem textLabel="Save" />
                    <DropdownItem textLabel="Exit" />
                </ul>
            )
        }

        return (
            <div className="dropdown">
                <p onClick={() => this.showMenu()}>File</p>
                {list}
            </div>
        );
    }
}

export default Dropdown;