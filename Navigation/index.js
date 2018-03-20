import React, { Component } from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { Home } from "../Screen/";

export default DrawerNavigator({
  Home: {
    screen: Home,
  },
});