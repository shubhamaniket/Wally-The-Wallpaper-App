import {createStackNavigator,createAppContainer} from 'react-navigation';

import HomeScreen from './Components/HomeScreen';
import Background from './Components/Background';
import Travel from './Components/Travel';
import Science from './Components/Science';
import Education from './Components/Education';
import Places from './Components/Places';
import Animals from './Components/Animals';
import Industry from './Components/Industry';
import Food from './Components/Food';
import Editors from './Components/Editors';
import Sports from './Components/Sports';
import Transport from './Components/Transport';
import Buildings from './Components/Buildings';
import Business from './Components/Business';
import Music from './Components/Music';

const Main = createStackNavigator({
  Home : {screen : HomeScreen},
  Background  : {screen : Background},
  Travel : {screen : Travel},
  Science : {screen : Science},
  Education : {screen : Education},
  Places : {screen : Places},
  Animals : {screen : Animals},
  Industry : {screen : Industry},
  Food : {screen : Food},
  Editors : {screen : Editors},
  Sports : {screen : Sports},
  Transport : {screen : Transport},
  Buildings : {screen : Buildings},
  Business : {screen : Business},
  Music : {screen : Music}
})

const App = createAppContainer(Main)
export default App