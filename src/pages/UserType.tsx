import React from "react";
import "./UserType.css";
import close from "../images/close.png";
import logo from "../images/icon.png";
import consumer from "../images/consumer-inactive.png";
import winery from "../images/winary-inactive.png";
import restautant from "../images/restaurant-inactive.png";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonTitle,
} from "@ionic/react";

const UserType: React.FC = () => {
  const history = useHistory();
  const onClose = () => {
    history.replace("/");
  };
  return (
    <IonPage>
      <IonContent className="bg-img-UserType">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                src={close}
                className="button-close"
                onClick={() => onClose()}
                alt="close button"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonImg src={logo} alt="logo" className="logo" />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className="txt-select-user-type">
                {" "}
                SELECT USER TYPE
              </IonTitle>
            </IonCol>
          </IonRow>
          <Link to="/join" className="link-join">
            <IonRow>
              <IonCol>
                <IonImg src={consumer} className="logo" />
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonTitle className="txt-select-user-type">CONSUMER </IonTitle>
              </IonCol>
            </IonRow>
          </Link>
          <Link to="/join" className="link-join">
            <IonRow>
              <IonCol>
                <IonImg src={winery} className="logo" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle className="txt-select-user-type"> WINERY</IonTitle>
              </IonCol>
            </IonRow>
          </Link>
          <Link to="/join" className="link-join">
            <IonRow>
              <IonCol>
                <IonImg src={restautant} className="logo" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonTitle className="txt-select-user-type">
                  RESTAURANT/BAR/OTHER{" "}
                </IonTitle>
              </IonCol>
            </IonRow>
          </Link>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default UserType;
