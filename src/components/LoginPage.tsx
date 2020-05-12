import React from 'react';
import './LoginPage.css';
import topPic from '../Images/icon.png';
import { 
    IonApp, 
    IonImg,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonFooter,
    

 } from '@ionic/react';
 import {Link} from 'react-router-dom';

const LoginPage: React.FC = ()=> {
return (
   <IonPage>
       <IonContent className="bg-img">
         <IonGrid>
            <IonRow>
            <IonCol>
            <IonImg src={topPic} alt="topPic" className="top-img" />
          </IonCol>
            </IonRow>
            <IonRow>
               <IonCol>
                  <IonTitle className="login-txt">
                    LOG IN 
                  </IonTitle>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol>
                  <IonItem lines="none" className="email-ion-item">
                        <IonInput type="email" className="email-txt" placeholder="Email Address"></IonInput>
                  </IonItem>
               </IonCol>
            </IonRow>
            <IonRow >
               <IonCol >
                  <IonItem lines="none" className="pass-ion-item">
                        <IonInput type="password" className="password-txt" placeholder="Password"></IonInput>
                  </IonItem>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol> 
                  <div className="div-btn">
                  <IonButton 
                  fill="outline" 
                  expand="block" 
                  strong
                  size="large"
                  className="btn-login"
                  >
                  LOG IN
                  </IonButton>
                  </div>
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol>
               <IonTitle className="dash-txt">___</IonTitle >    
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol>
               <IonTitle className="new-member-txt"> New member?</IonTitle >    
               </IonCol>
            </IonRow>
            <IonRow>
               <IonCol>
               <Link to="/joinpage" className="link-create-account">
               <IonTitle className="create-account-txt bold"> 
              
               CREATE ACCOUNT 
               </IonTitle>   
               </Link>
               </IonCol>
            </IonRow>
         </IonGrid>
       </IonContent>
   </IonPage>
);
};

export default LoginPage;