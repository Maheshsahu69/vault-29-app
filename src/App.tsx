import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonApp, IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import TabRoot from './pages/TabRoot';

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
import Home from './pages/Home';
import Login from './pages/Login';
import Alert from './components/Alert';
import { setAccept, setAuthToken } from './utils/setCommonHeaders';
import Join from './pages/Join';
import { loadState } from './utils/localStorage';
import PublicRoute from './routing/PublicRoute';
import PrivateRoute from './routing/PrivateRoute';
import Search from './pages/Search';

setAccept();

const token = loadState('token');
token && setAuthToken(token);

const App: React.FC = () => (
  <IonApp>
    <Alert />
    <IonReactRouter>
      <IonRouterOutlet>
        <PublicRoute exact path="/">
          <Home />
        </PublicRoute>
        <PublicRoute exact path="/login">
          <Login />
        </PublicRoute>
        <PublicRoute exact path="/join">
          <Join />
        </PublicRoute>
        <PrivateRoute exact path="/search">
          <Search />
        </PrivateRoute>
        <Route>
          <TabRoot />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>``
  </IonApp>
);

export default App;
