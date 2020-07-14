import React from 'react';
import { 
    IonPage, 
    IonContent, 
    IonRow, 
    IonCol, 
    IonImg 
} from '@ionic/react';
import close from '../images/close.png';
import logo from '../images/icon.png';

const UserType:React.FC=()=>{
    return(
        <IonPage>
            <IonContent className="bg-img-user-type">
                <IonRow>
                    <IonCol>
                        <IonImg src={close} alt="logo error" className="close-button" />
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    );
}

export default UserType ;