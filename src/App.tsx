import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  locationOutline,
  wineOutline,
  newspaperOutline,
  camera,
  starOutline,
} from 'ionicons/icons';
import WineWall from './pages/WineWall';
import News from './pages/News';
import Nearby from './pages/Nearby';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/winewall" exact>
            <WineWall />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/nearby" exact>
            <Nearby />
          </Route>
          <Route path="/" exact>
            <Redirect to="/winewall" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/winewall">
            <IonIcon icon={wineOutline} />
            <IonLabel>WINE WALL</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>NEWS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/post">
            <IonIcon icon={camera} />
          </IonTabButton>
          <IonTabButton tab="tab4" href="/nearby">
            <IonIcon icon={locationOutline} />
            <IonLabel>NEARBY</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/favorite">
            <IonIcon icon={starOutline} />
            <IonLabel>FAVORITES</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
