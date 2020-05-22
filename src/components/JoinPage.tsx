import React, { useState } from "react";
import "./JoinPage.css";
import {
  IonImg,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonInput,
  IonItem,
  IonButton,
  IonToast,
} from "@ionic/react";
import icon from "../Images/consumer-inactive.png";

const JoinPage: React.FC = (props: any) => {
  const [userNameText, setUserNameText] = useState("");
  const [nameText, setNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [confirmPasswordText, setConfirmPasswordText] = useState("");

  const [validationStatus, setValidationStatus] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const joinClick = async (props: any) => {
    const state = {
      username: userNameText,
      business_name: nameText,
      email: emailText,
      user_type: "Consumer",
      account_type: "Email",
      password: passwordText,
    };
    console.log("state", state);
    let result = await fetch(
      "https://vault29-backend.innoventestech.in/v2/user/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      }
    );
    let res = await result.json();
    console.log("response", res);

    if (res.success === "true") {
      props.history.push("/login");
    } else {
      if (res.message.username) {
        if (res.message.username.length > 0) {
          setValidationStatus(true);
          setValidationErrorMessage(res.message.username);
        }
      }

      if (res.message) {
        if (res.message === "Email with Account Type Already Registered") {
          setValidationStatus(true);
          setValidationErrorMessage(res.message);
        }
      }

      if (passwordText !== confirmPasswordText) {
        setValidationStatus(true);
        setValidationErrorMessage("Password Mismatch.");
      }
      if (passwordText === "") {
        setValidationStatus(true);
        setValidationErrorMessage("Password mismatch.");
      }

      if (res.message.password) {
        if (res.message.password.length > 0) {
          setValidationStatus(true);
          setValidationErrorMessage(res.message.password);
        }
      }

      if (res.message.email) {
        if (res.message.email.length > 0) {
          setValidationStatus(true);
          setValidationErrorMessage(res.message.email);
        }
      }
    }
  };
  return (
    <div>
      <IonPage>
        <IonContent className="bg-img-join">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonImg src={icon} alt="topImgJoin" className="top-img-join" />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-padding">
                <IonTitle className="ion-text-center" id="add-photo-txt">
                  Add Photo
                </IonTitle>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="name-item">
                  <IonInput
                    placeholder="Name"
                    className="name-txtbx"
                    type="text"
                    onIonChange={(e) => setNameText(e.detail.value!)}
                    value={nameText}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="username-item">
                  <IonInput
                    placeholder="Username"
                    className="username-txtbx"
                    type="text"
                    onIonChange={(e) => setUserNameText(e.detail.value!)}
                    value={userNameText}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="email-item">
                  <IonInput
                    placeholder="Email Address"
                    className="email-txtbx"
                    type="email"
                    onIonChange={(e) => {
                      setEmailText(e.detail.value!);
                    }}
                    value={emailText}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="password-item">
                  <IonInput
                    placeholder="Password"
                    className="password-txtbx"
                    type="password"
                    onIonChange={(e) => setPasswordText(e.detail.value!)}
                    value={passwordText}
                  />
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="confirm-password-item">
                  <IonInput
                    placeholder="Confirm Password"
                    className="confirm-password-txtbx"
                    type="password"
                    onIonChange={(e) => setConfirmPasswordText(e.detail.value!)}
                    value={confirmPasswordText}
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonItem color="transparent" className="location-item">
                  <IonInput
                    placeholder="Location"
                    className="location-txtbx"
                    type="text"
                  ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton
                  size="large"
                  expand="block"
                  strong
                  fill="outline"
                  className="btn-join-joinpage"
                  onClick={() => joinClick({ ...props })}
                >
                  {" "}
                  JOIN
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>

      {validationErrorMessage && (
        <IonToast
          isOpen={validationStatus}
          onDidDismiss={() => setValidationStatus(false)}
          message={validationErrorMessage}
          position="top"
          duration={2000}
          color="light"
        />
      )}
    </div>
  );
};

export default JoinPage;
