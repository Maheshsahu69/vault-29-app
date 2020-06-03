import React from 'react';
import {
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
import PrivateRoute from '../routing/PrivateRoute';

const TabRoot: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <PrivateRoute path="/winewall" exact>
          <WineWall />
        </PrivateRoute>
        <PrivateRoute path="/news" exact>
          <News />
        </PrivateRoute>
        <PrivateRoute path="/post" exact>
          <Post />
        </PrivateRoute>
        <PrivateRoute path="/nearby" exact>
          <Nearby />
        </PrivateRoute>
        <PrivateRoute path="/favorite" exact>
          <Favorite />
        </PrivateRoute>
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