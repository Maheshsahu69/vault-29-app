import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonTabBar,
  IonTabButton,
  IonLabel,
  
} from '@ionic/react';
import {IonReactRouter} from '@ionic/react-router';
import { Route,Redirect , BrowserRouter,Link} from 'react-router-dom'
// import { ellipse, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
import LoginPage from './components/LoginPage';

import LandingPage from './components/LandingPage';

// import bgImag from './Images/vault29-background.png';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

//  const logInCompo =()=>{
//    <LoginPage />
//  }
const App: React.FC = () => {
  return(
    <IonApp>
      {/* <IonReactRouter>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              </IonTitle>
              My title
            </IonToolbar>
          </IonHeader>
          <IonContent class="ion-padding">
            <IonTabs>
              <IonRouterOutlet>
                  <Route path="/loginpage" component={LoginPage} />
                  <Route path="/" component={LandingPage} />
              </IonRouterOutlet>
              <IonTabBar slot="bottom">
                <IonTabButton>
                  <IonLabel>
                    Landing Page
                  </IonLabel>
                </IonTabButton>

                <IonTabButton>
                  <IonLabel>
                    Login Page
                  </IonLabel>
                </IonTabButton>

                </IonTabBar>
              </IonTabs>
          </IonContent>
      </IonReactRouter> */}
      <IonContent>
        {/* <LandingPage pic={topPic}/> */}
        {/* <div><LoginPage pic={topPic}/></div> */}

      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/loginpage" component={LoginPage} />
      </BrowserRouter>
      </IonContent>
      
    </IonApp>
);
}

export default App;
