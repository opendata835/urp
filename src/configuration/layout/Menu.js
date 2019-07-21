import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import {
    DashboardMenuItem,
    MenuItemLink,
} from 'react-admin';
import AccountBalance from '@material-ui/icons/AccountBalance'
import SubMenu from './SubMenu';


class Menu extends Component {
    state = {
        menuMinjust: false
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

    render() {
        const { onMenuClick, open, logout, } = this.props;
        return (
            <div>
                {' '}
                <DashboardMenuItem onClick={onMenuClick} />
                <SubMenu
                            handleToggle={() => this.handleToggle('menuMinjust')}
                            isOpen={this.state.menuMinjust}
                            sidebarIsOpen={open}
                            name="Міністерство юстиції"
                            leftIcon={<AccountBalance />}
                            >
                                <MenuItemLink
                                to={`/minjustod01uo`}
                                primaryText='Юрідични ліца'
                                onClick={onMenuClick}
                                leftIcon={<AccountBalance />}
                                />                                
                </SubMenu>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
);

export default enhance(Menu);
