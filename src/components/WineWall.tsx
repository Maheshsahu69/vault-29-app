import React, { useState, useEffect } from "react";
import "./wineWall.css";
import TopTab from "./TopTab";
import BottomTab from "./BottomTab";
import ImageList from "./ImageList";
import axion from "axios";
import {
  IonContent,
  IonPage,
  IonLabel,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import logo from "../Images/logo_3x.png";
// import news from "../Images/blog_3x.png";
// import nearBy from "../Images/nearby_3x.png";
// import favorit from "../Images/favorites_3x.png";
// import { getMaxListeners } from "cluster";

const WineWall: React.FC = () => {
  const [images, setImages] = useState([]);
  const [loded, setLoded] = useState(false);
  const loadImages = async () => {
    let token = localStorage.getItem("token");
    const result = await axion.get(
      "https://vault29-backend.innoventestech.in/v2/post",
      {
        params: {
          limit: 20,
          offset: 0,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("res", result);
    setImages(result.data.userData);
  };

  useEffect(() => {
    loadImages().then(() => {
      {
        setLoded(true);
      }
    });
  }, []);

  return (
    <IonPage>
      <IonLabel className="ion-padding">
        <IonImg className="title-text" src={logo} alt="logo" />
      </IonLabel>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <br />
              <br />
              <br />
              <TopTab />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ImageList images={images} />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <br />
              <br />
              <br />
              {loded && <BottomTab />}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default WineWall;
