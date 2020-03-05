import HomePage from "./src/views/Homepage"
import ScanPage from "./src/views/Scanpage"
import RegisterPage from "./src/views/Register"
import LoginPage from "./src/views/Login"
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MainNavigator = createStackNavigator({
  Home: { screen: HomePage },
  Scan: { screen: ScanPage },
  Login: { screen: LoginPage },
  Register:{ screen: RegisterPage }
},
  {
    headerMode: 'none',
    initialRouteName: 'Login'
  }
)
const App = createAppContainer(MainNavigator)

export default App