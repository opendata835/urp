import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import SubMenu from './SubMenu';
import {
    translate,
    DashboardMenuItem,
    MenuItemLink,
    Responsive,
} from 'react-admin';

// Иконки 
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import PeopleIcon from '@material-ui/icons/People'
import SettingsIcon from '@material-ui/icons/Settings'



class Menu extends Component {
    state = {
        menuMinjust: false
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
        logout: PropTypes.object,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

    render() {
        const { onMenuClick, open, logout, translate } = this.props;
        return (
            <div>
                {' '}
                {/* <DashboardMenuItem onClick={onMenuClick} /> */}
                <SubMenu
                    handleToggle={() => this.handleToggle('menuSystem')}
                    isOpen={this.state.menuSystem}
                    sidebarIsOpen={open}
                    name="menu.system.name"
                    icon={<SettingsIcon />}
                >
                        <MenuItemLink
                            to={`/users`}
                            primaryText={translate(`menu.system.item.users`, {
                                smart_count: 2,
                            })}
                            onClick={onMenuClick}
                            leftIcon={<PeopleIcon />}
                        />                                
                        <MenuItemLink
                            to={`/roles`}
                            primaryText={translate(`menu.system.item.roles`, {
                                smart_count: 2,
                            })}
                            onClick={onMenuClick}
                            leftIcon={<PeopleIcon />}
                        />
                </SubMenu>
                <SubMenu
                    handleToggle={() => this.handleToggle('menuMinjust')}
                    isOpen={this.state.menuMinjust}
                    sidebarIsOpen={open}
                    name="menu.minjust.name"
                    icon={<AccountBalanceIcon />}
                >
                        <MenuItemLink
                            to={`/minjustod01uo`}
                            primaryText={translate(`menu.minjust.item.minjustod01uo`, {
                                smart_count: 2,
                            })}
                            onClick={onMenuClick}
                            leftIcon={<AccountBalanceIcon />}
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
    translate
);

export default enhance(Menu);
