import React from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import { RootState } from "../reducers";
import { useSelector } from "react-redux";
import logo from "../images/avatar-placeholder.png";

const LoggedInProfile: React.FC = () => {
  const email = useSelector<RootState, string>((state) => state.auth.user.email);
  return (
    <IonGrid>
      <IonRow style={{ backgroundColor: "#696969" }}>
        <IonCol size="12" size-sm className="ion-text-center">
          <img className="gallery-post" src={logo} alt="error" />
        </IonCol>
        <IonCol className="ion-text-center">{email}</IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default LoggedInProfile;
