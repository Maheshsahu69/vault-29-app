import React from "react";
import {
  IonApp,
  IonContent,
} from "@ionic/react";
import { IonReactRouter} from "@ionic/react-router";
import { Route, Switch } from "react-router-dom";
// import { ellipse, square, triangle } from 'ionicons/icons';
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
import LoginPage from "./components/LoginPage";
import LandingPage from "./components/LandingPage";
import JoinPage from "./components/JoinPage";
import WineWall from './components/WineWall';

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
const App: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <IonReactRouter>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/winewall" exact component={WineWall}/>
          <Route path="/join" exact component={JoinPage} />   
          </Switch>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  );
};

export default App;
