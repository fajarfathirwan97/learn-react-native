import { NavigationActions } from 'react-navigation'

let navigation = {}

export function setNavigator(nav) {
  if (nav)
    navigation.navigator = nav
}

export var navigate = (navigateAction) => {
  if (navigation.navigator) {
    let action = NavigationActions.navigate(navigateAction)
    navigation.navigator.dispatch(action)
  }
}

export var reset = (navigateAction) => {
  if (navigation.navigator) {
    let action = NavigationActions.reset(navigateAction)
    navigation.navigator.dispatch(action)
  }
}

export var back = () => {
  if (navigation.navigator) {
    let action = NavigationActions.back({})
    navigation.navigator.dispatch(action)
  }
}

