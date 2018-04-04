/**
 * @providesModule themes
 */
import Colors from './Colors'
import { Dimensions } from 'react-native'

const Metrics = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height
}

export {
  Colors,
  Metrics
}