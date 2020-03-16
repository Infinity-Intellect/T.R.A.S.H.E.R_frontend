import HomePage from "./src/views/Homepage"
import LoginPage from "./src/views/Login"
import ScanPage from "./src/views/Scanpage"
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Scan: { screen: ScanPage },
  Login: { screen: LoginPage }
},
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)
const App = createAppContainer(MainNavigator)

export default App