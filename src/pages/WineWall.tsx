import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner } from '@ionic/react';
import './WineWall.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post';
import { RootState } from '../reducers';
import WineList from '../components/WineList';

const WineWall: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector<RootState, boolean>(state => state.post.loading);

  useEffect(() => {
    dispatch(getPosts(0, 40));
    // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Wine Wall</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? <IonSpinner /> : <WineList />}
      </IonContent>
    </IonPage>
  );
};

export default WineWall;
