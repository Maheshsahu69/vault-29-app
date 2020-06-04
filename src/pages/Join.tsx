import React, { useState } from "react";
import "./Join.css";
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
  IonList,
  IonCheckbox,
  IonLabel,
  IonFooter,
  IonToolbar
} from "@ionic/react";
import icon from "../images/consumer-inactive.png";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doJoin } from "../actions/auth";
import { JoinForm } from "../types";
import { UserType, AccountType } from "../constants";
import { setAlert } from "../actions/alert";
import { RootState } from "../reducers";

const Join: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const token = useSelector<RootState, string>(state => state.auth.token);
  if (token) {
    history.push('/winewall');
  }

  const onJoin = () => {
    if (username && name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const joinForm: JoinForm = {
          username,
          password,
          name,
          email,
          user_type: UserType.Consumer,
          account_type: AccountType.Email
        };
        dispatch(doJoin(joinForm));
      } else {
        dispatch(setAlert('Password and confirm password must match', 'danger'));
      }
    } else {
      dispatch(setAlert('Required fields missing', 'danger'));
    }
  }

  return (
    <IonPage>
      <IonContent className="bg-img-join">
        <IonGrid>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonImg src={icon} alt="topImgJoin" className="top-img-join" />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonTitle className="ion-text-center" id="add-photo-txt">
          Add Photo
        </IonTitle>

        <IonList className='bg-transparent'>
          <IonItem color="transparent" className="name-item">
            <IonInput
              placeholder="Name"
              className="name-txtbx"
              type="text"
              onIonChange={(e) => setName(e.detail.value!)}
              value={name}
            />
          </IonItem>
          <IonItem color="transparent" className="username-item">
            <IonInput
              placeholder="Username"
              className="username-txtbx"
              type="text"
              onIonChange={(e) => setUsername(e.detail.value!)}
              value={username}
            ></IonInput>
          </IonItem>
          <IonItem color="transparent" className="email-item">
            <IonInput
              placeholder="Email Address"
              className="email-txtbx"
              type="email"
              onIonChange={(e) => {
                setEmail(e.detail.value!);
              }}
              value={email}
            ></IonInput>
          </IonItem>
          <IonItem color="transparent" className="password-item">
            <IonInput
              placeholder="Password"
              className="password-txtbx"
              type="password"
              onIonChange={(e) => setPassword(e.detail.value!)}
              value={password}
            />
          </IonItem>
          <IonItem color="transparent" className="confirm-password-item">
            <IonInput
              placeholder="Confirm Password"
              className="confirm-password-txtbx"
              type="password"
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              value={confirmPassword}
            ></IonInput>
          </IonItem>
          <IonItem color="transparent" className="location-item">
            <IonInput
              placeholder="Location"
              className="location-txtbx"
              type="text"
            ></IonInput>
          </IonItem>
          <IonItem color="transparent" className="location-item">
            <IonInput
              placeholder="Birthday"
              className="location-txtbx"
              type="text"
            ></IonInput>
          </IonItem>
        </IonList>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton
                size="large"
                expand="block"
                strong
                fill="outline"
                className="btn-join-joinpage"
              >
                {" "}
                    MALE
                  </IonButton>
            </IonCol>
            <IonCol>
              <IonButton
                size="large"
                expand="block"
                strong
                fill="outline"
                className="btn-join-joinpage"
              >
                {" "}
                    FEMALE
                  </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem color='transparent' lines='none'>
                <IonCheckbox className='cb-transparent' slot='start'></IonCheckbox>
                <IonLabel>By accepting Terms of Use, I acknowledge that I am of legal drinking age</IonLabel>
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
                onClick={() => onJoin()}
              >
                {" "}
                  JOIN
                </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default Join;
