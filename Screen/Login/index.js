import { StackNavigator } from "react-navigation";

import { Colors } from "themes";
import LoginScreen from "./LoginScreen";

export default StackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    headerMode: 'none'
  }
)