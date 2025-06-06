import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, square, triangle } from 'ionicons/icons'
import Tab1 from './pages/Tab1'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import './theme/variables.css'
import React from 'react'
import LoginPage from './pages/Login'
import NotFoundPage from './pages/NotFound'
import Tab1Page1 from './pages/Tab1Page1'

setupIonicReact()

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/tabs/tab1">
        <Tab1 />
      </Route>
      <Route exact path="/tabs/tab1/page1">
        <Tab1Page1 />
      </Route>
      <Route exact path="/tabs/tab2">
        <Tab2 />
      </Route>
      <Route path="/tabs/tab3">
        <Tab3 />
      </Route>
      <Route component={NotFoundPage} />

      {/* <Route render={() => <Redirect to="/tabs/tab1" />} /> */}
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/tab1">
        <IonIcon aria-hidden="true" icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon aria-hidden="true" icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon aria-hidden="true" icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
)

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="app">
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/tabs">
          <Tabs />
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App
