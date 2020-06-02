import React, { useState } from "react";
import topPic from "../Images/icon.png";
import "./LoginPage.css";
import {
  IonImg,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import { Link } from "react-router-dom";

const LoginPage: React.FC = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationStatus, setValidationStatus] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const login = async (props: any, password: any, email: any) => {
    console.log("login click props : ", props);
    const state = { email: email, password: password };
    console.log("login state", state);
    let result = await fetch(
      "https://vault29-backend.innoventestech.in/v2/user/signin",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );

    let response = await result.json();
    console.log("response", response);
    localStorage.setItem("token", (response.token));
    // let token = localStorage.getItem("token");
  

    const successVar = response.success;
    if (successVar === "true") {
      props.history.push("/winewall");
    } else {
      if (response.message.email) {
        if (response.message.email.length > 0) {
          setValidationStatus(true);
          setValidationMessage(response.message.email);
        }
      }

      if (response.message === "Email id is not registered") {
        setValidationStatus(true);
        setValidationMessage(response.message);
      }

      if (response.message === "Invalid Password, Case Sensitive") {
        setValidationStatus(true);
        setValidationMessage(response.message);
      }
    }
  };

  return (
    <div>
      <IonPage>
        <IonContent className="bg-img-login">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-padding">
                <IonImg src={topPic} alt="topPic" className="top-img-login" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonTitle className="login-txt">LOG IN</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonItem className="email-ion-item" color="transparent">
                  <IonInput
                    type="email"
                    className="email-txt"
                    placeholder="Email Address"
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    value={email}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonItem className="pass-ion-item" color="transparent">
                  <IonInput
                    type="password"
                    className="password-login"
                    placeholder="Password"
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    value={password}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <div className="div-btn">
                  <IonButton
                    fill="outline"
                    expand="block"
                    strong
                    size="large"
                    className="btn-login"
                    onClick={() => login({ ...props }, password, email)}
                  >
                    LOG IN
                  </IonButton>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonTitle className="dash-txt bold">___</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonTitle className="new-member-txt"> New member?</IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <Link to="/join" className="link-create-account">
                  <IonTitle className="create-account-txt bold">
                    CREATE ACCOUNT
                  </IonTitle>
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
      {validationMessage && (
        <IonToast
          isOpen={validationStatus}
          onDidDismiss={() => setValidationStatus(false)}
          message={validationMessage}
          duration={2000}
          position="top"
          color="light"
        />
      )}
    </div>
  );
};

export default LoginPage;
