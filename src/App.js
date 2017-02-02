import React, {Component} from 'react';
import {Scene, Router, TabBar, Icon} from 'react-native-router-flux';

/*
 * Containers (Views)
 */
 import WelcomeScene from './scenes/WelcomeScene'
 import LoginScene from './scenes/LoginScene'
 import CategoriesScene from './scenes/CategoriesScene'
 import GifSelectionScene from './scenes/GifSelectionScene'
 import ProfileScene from './scenes/ProfileScene'

/*
 * TabBar Icons
 */
import TabIcon from './components/navigation/Tab';

/**
 * TODO Step 2:
 *
 * 1. Uncomment out routes below. Make sure you don't forget 
 * to remove the curry braces along with the comment ;) 
 */
const App = () => {
  return(
    <Router>
      {/*
      <Scene key="root" >
        <Scene key="Welcome" initial={true} component={WelcomeScene} title='Welcome' direction="vertical"/>
        <Scene key="login" component={LoginScene} title='Login' direction="vertical"/>
        <Scene key="tabbar" tabs={true} tabBarStyle={{ backgroundColor: '#eee' }}>
          <Scene key="gif" title="Gifs" icon={TabIcon} initial={true}>
            <Scene key="categories" component={CategoriesScene} title="Categories" />
            <Scene key="gifs" component={GifSelectionScene} title="Gifs" />
          </Scene>
          <Scene key="prof" title="Profile" icon={TabIcon}>
            <Scene key="profile" component={ProfileScene} title="Profile" />
          </Scene>
        </Scene>
      </Scene>
      */}
    </Router>
  )
}

export default App
