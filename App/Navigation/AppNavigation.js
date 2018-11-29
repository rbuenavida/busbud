import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import ProfileScreen from '../Containers/ProfileScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ProfileScreen: { screen: ProfileScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ProfileScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
