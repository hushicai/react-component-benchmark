import React, { PureComponent } from 'react'

class ListItem extends PureComponent {
    render() {
        let { text } = this.props;

        return <li>{text}</li>;
    }
}

export default ListItem;
