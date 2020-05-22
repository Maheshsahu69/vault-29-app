import React from "react";
import "./LandingPage.css";
import { logoFacebook } from "ionicons/icons";
import {
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
  IonPage,
} from "@ionic/react";
import { Link } from "react-router-dom";
import topPic from "../Images/icon.png";

const LandingPage: React.FC = () => (
  <IonPage>
    <IonContent className="bg-img">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonImg src={topPic} alt="topPic" className="top-img" />
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
              <Link to="/join" className="link-join">
                <IonButton
                  fill="outline"
                  expand="block"
                  className="btn-join"
                  size="large"
                  strong
                >
                  JOIN
                </IonButton>
              </Link>
            </IonCol>
            <IonCol>
              <Link to="login" className="link-login">
                <IonButton
                  fill="outline"
                  expand="block"
                  className="btn-login"
                  size="large"
                  strong
                >
                  LOG IN
                </IonButton>
              </Link>
            </IonCol>
          </IonRow>
        </IonGrid>
      </div>
    </IonFooter>
  </IonPage>
);

export default LandingPage;
  