import React from "react";
import { connect } from "react-redux";
import { Layout, Sidebar } from "react-admin";
import Menu from "./Menu";
import { darkTheme, lightTheme } from "./themes";
// import AppBar from './AppBar';

const CustomSidebar = props => (
  <div>
    <Sidebar {...props} size={250} />
  </div>
);
const CustomLayout = props => (
  // <div><Layout {...props} appBar={AppBar} sidebar={CustomSidebar} menu={Menu} /></div>
  <div>
    <Layout {...props} sidebar={CustomSidebar} menu={Menu} />
  </div>
);

export default connect(
  state => ({
    theme: state.theme === "dark" ? darkTheme : lightTheme
  }),
  {}
)(CustomLayout);
