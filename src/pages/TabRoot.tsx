import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonPage,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';

import {
  locationOutline,
  wineOutline,
  newspaperOutline,
  camera,
  starOutline,
} from 'ionicons/icons';

import WineWall from './WineWall';
import News from './News';
import Nearby from './Nearby';
import Favorite from './Favorite';
import Post from './Post';

const TabRoot: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/winewall" exact>
          <WineWall />
        </Route>
        <Route path="/news" exact>
          <News />
        </Route>
        <Route path="/post" exact>
          <Post />
        </Route>
        <Route path="/nearby" exact>
          <Nearby />
        </Route>
        <Route path="/favorite" exact>
          <Favorite />
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
  );
}

export default TabRoot;