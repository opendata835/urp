import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, crudUpdateMany } from 'react-admin';

class ResetViewsButton extends Component {
    handleClick = () => {
        const { basePath, crudUpdateMany, resource, selectedIds } = this.props;
        crudUpdateMany(resource, selectedIds, { views: 0 }, basePath);
    };

    render() {
        return (
            <Button label="Скинути вибір" onClick={this.handleClick} />
        );
    }
}

export default connect(undefined, { crudUpdateMany })(ResetViewsButton);