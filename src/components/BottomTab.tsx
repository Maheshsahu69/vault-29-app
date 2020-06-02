import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,

} from "@ionic/react";
import {
  locationOutline,
  wineOutline,
  newspaperOutline,
  starOutline,
} from "ionicons/icons";

const BottomTab: React.FC = () => {
  return (
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="grid">
            <IonIcon icon={wineOutline} />
            <IonLabel>WINE WALL</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>NEWS</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonIcon icon={locationOutline} />
            <IonLabel>NEARBY</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonIcon icon={starOutline} />
            <IonLabel>FAVORITES</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  
  );
};

export default BottomTab;
