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
  gridOutline,
  reorderThreeOutline,
  locationOutline,
} from "ionicons/icons";
// import logo from "../Images/logo_3x.png";
import './TopTab.css'

const TopTab: React.FC = () => {
  return (
      <IonTabs>
        <IonRouterOutlet></IonRouterOutlet>
        <IonTabBar slot="top">
          <IonTabButton tab="grid">
            <IonIcon icon={gridOutline}  />
            <IonLabel>GRID</IonLabel>
          </IonTabButton>
          <IonTabButton tab="list">
            <IonIcon icon={reorderThreeOutline} />
            <IonLabel>LIST</IonLabel>
          </IonTabButton>
          <IonTabButton tab="map">
            <IonIcon icon={locationOutline} />
            <IonLabel>MAP</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default TopTab;
