import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonAvatar } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail } from '../actions/post';
import { RootState } from '../reducers';
import logoWhite from '../images/logo-white.png';
import logoBlack from '../images/logo-black.png';
import logo from '../images/icon.png';
import { useParams } from 'react-router';

const PostDetail: React.FC = () => {
  const { id } = useParams();
  const user_id = useSelector<RootState, number>(state => state.auth.user.id);
  const dispatch = useDispatch();
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    dispatch(getPostDetail(id, user_id));
    // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-text-center'>
          <IonAvatar slot='start'>
            <img alt='Logged-in User Profile' src={logo} />
          </IonAvatar>
          {isDarkMode ?
            <img className='header-logo' alt='White Vault29 Logo' src={logoWhite} /> :
            <img className='header-logo' alt='Black Vault29 Logo' src={logoBlack} />
          }
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Post Detail</p>
      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
