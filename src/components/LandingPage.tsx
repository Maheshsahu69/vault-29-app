import React from "react";
import "./LandingPage.css";
import { logoFacebook } from "ionicons/icons";
import {
  IonApp,
  IonImg,
  IonContent,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonText,
  IonButton,
  IonFooter,
} from "@ionic/react";

const LandingPage: React.FC<{ pic: string }> = (props) => (
  <IonApp>
    <IonContent className="bg-img">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonImg src={props.pic} alt="topPic" className="top-img" />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-padding">
            <IonTitle className="vault-txt">
              {" "}
              <p> VAULT29</p>{" "}
            </IonTitle>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className="ion-padding">
            <IonText className="txt-title">
              <p>Connecting the world of wine through experiences</p>
            </IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
    <IonFooter>
      <div className="btn-background">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                fill="outline"
                expand="block"
                className="btn-facebook"
                size="large"
                strong
              >
                <IonIcon icon={logoFacebook} slot="start"></IonIcon>
                CONNECT WITH FACEBOOK
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton
                fill="outline"
                expand="block"
                className="btn-join"
                size="large"
                strong
              >
                JOIN
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                fill="outline"
                expand="block"
                className="btn-login"
                size="large"
                strong
              >
                LOG IN
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonFooter>
  </IonApp>
);

export default LandingPage;
