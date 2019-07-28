import React from "react";
import { AppBar, UserMenu, MenuItemLink } from "react-admin";
import Typography from "@material-ui/core/Typography";
import SettingsIcon from "@material-ui/icons/Settings";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  },
  spacer: {
    flex: 1
  }
};

const CustomUserMenu = (...props) => (
  <div>
    <UserMenu {...props}>
      <MenuItemLink
        to="/configuration"
        primaryText="Налаштування"
        leftIcon={<SettingsIcon />}
      />
      <MenuItemLink
        to="/logout"
        primaryText="Вихід"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  </div>
);

const CustomAppBar = ({ classes, ...props }) => (
  <div>
    <AppBar {...props} userMenu={<CustomUserMenu />}>
      <Typography
        variant="title"
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <span className={classes.spacer} />
    </AppBar>
  </div>
);

export default withStyles(styles)(CustomAppBar);
