import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonAvatar } from '@ionic/react';
import './WineWall.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post';
import { RootState } from '../reducers';
import WineList from '../components/WineList';
import logoWhite from '../images/logo-white.png';
import logoBlack from '../images/logo-black.png';
import logo from '../images/icon.png';

const WineWall: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(state => state.post.loading);
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    dispatch(getPosts(0, 40));
    // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-text-center'>
          <IonAvatar slot='start'>
            <img src={logo} />
          </IonAvatar>
          {isDarkMode ?
            <img className='header-logo' src={logoWhite} /> :
            <img className='header-logo' src={logoBlack} />
          }
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? <IonSpinner /> : <WineList />}
      </IonContent>
    </IonPage>
  );
};

export default WineWall;
