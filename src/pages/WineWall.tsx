import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './WineWall.css';

const WineWall: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wine Wall</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wine Wall</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Wine Wall page" />
      </IonContent>
    </IonPage>
  );
};

export default WineWall;
