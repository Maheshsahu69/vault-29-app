import React, { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonAvatar, IonBackButton, IonButtons, IonCard, IonSpinner, IonText, IonItem, IonIcon, IonGrid, IonRow, IonCol, IonCardContent } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostDetail } from '../actions/post';
import { RootState } from '../reducers';
import logoWhite from '../images/logo-white.png';
import logoBlack from '../images/logo-black.png';
import { useParams } from 'react-router';
import { PostDetail } from '../types';
import { API_ENDPOINT } from '../constants';
import { locationOutline, timeOutline, heartOutline, chatbubbleEllipsesOutline, starOutline, ellipsisVerticalOutline } from 'ionicons/icons';
import moment from 'moment';

const Post: React.FC = () => {
  const { id } = useParams();
  const user_id = useSelector<RootState, number>(state => state.auth.user.id);
  const dispatch = useDispatch();
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const loading = useSelector<RootState, boolean>(state => state.post.loading);
  const post = useSelector<RootState, PostDetail>(state => state.post.post);

  useEffect(() => {
    dispatch(getPostDetail(id, user_id));
    // eslint-disable-next-line
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className='ion-text-center'>
          <IonButtons slot='start'>
            <IonBackButton defaultHref='/posts'></IonBackButton>
          </IonButtons>
          {isDarkMode ?
            <img className='header-logo' alt='White Vault29 Logo' src={logoWhite} /> :
            <img className='header-logo' alt='Black Vault29 Logo' src={logoBlack} />
          }
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {loading ? <IonSpinner /> :
          (<IonCard>
            <IonGrid>
              <IonRow>
                <IonCol size='3'>
                  <IonAvatar>
                    <img alt='Post User Profile' src={`${API_ENDPOINT}/${post.thumbnail_url}`} />
                  </IonAvatar>
                </IonCol>
                <IonCol size='6'>
                  <IonRow>
                    <IonItem>
                      <IonText><h3>{post.name}</h3></IonText>
                    </IonItem>
                  </IonRow>
                  <IonRow>
                    <IonItem>
                      <IonIcon slot='start' src={locationOutline} />
                      <p>{post.venue}</p>
                    </IonItem>
                  </IonRow>
                </IonCol>
                <IonCol size='3'>
                  <IonItem>
                    <IonIcon slot='start' src={timeOutline} />
                    <p>{moment(post.created_at).fromNow()}</p>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <img alt='Post' src={`${API_ENDPOINT}/${post.photo_url}`} />
              </IonRow>
            </IonGrid>
            <IonCardContent>
              {post.comment}
            </IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size='4'>
                  <IonItem>
                    <IonIcon slot='start' src={heartOutline} />
                    <p>{post.attributes.like_count} Like</p>
                  </IonItem>
                </IonCol>
                <IonCol size='4'>
                  <IonItem>
                    <IonIcon slot='start' src={chatbubbleEllipsesOutline} />
                    <p>{post.attributes.comment_count} Comment </p>
                  </IonItem>
                </IonCol>
                <IonCol size='2'>
                  <IonItem>
                    <IonIcon slot='start' src={starOutline} />
                  </IonItem>
                </IonCol>
                <IonCol size='2'>
                  <IonItem>
                    <IonIcon slot='end' src={ellipsisVerticalOutline} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>)
        }
      </IonContent>
    </IonPage>
  );
};

export default Post;
