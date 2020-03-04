import HomePage from "./src/views/Homepage"
import ScanPage from "./src/views/Scanpage"
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Scan: { screen: ScanPage }
},
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)
const App = createAppContainer(MainNavigator)

export default App