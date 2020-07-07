import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonAvatar,
  IonBackButton,
  IonButtons,
  IonCard,
  IonSpinner,
  IonText,
  IonItem,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonCardContent,
  IonLabel,
  IonSearchbar,
  IonButton,
} from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { getPostDetail } from "../actions/post";
import { RootState } from "../reducers";
import logoWhite from "../images/logo-white.png";
import logoBlack from "../images/logo-black.png";
import { useParams, useHistory } from "react-router";
import { PostDetail } from "../types";
import { API_ENDPOINT } from "../constants";
import {
  locationOutline,
  timeOutline,
  heartOutline,
  chatbubbleEllipsesOutline,
  starOutline,
  ellipsisVerticalOutline,
} from "ionicons/icons";
import moment from "moment";
import "./Post.css";
import { fetchProfileAction } from "../actions/profile";
import { searchQueryAction } from "../actions/post";
import { setAlert } from "../actions/alert";
import { searchOutline } from "ionicons/icons";
import avatar from "../images/avatar-placeholder.png";
import birthday from "../images/emojis/Birthday.png";
import delicious from "../images/emojis/Delicious.png";
import twoThumbs from "../images/emojis/TwoThumbs.png";
import love from "../images/emojis/Love.png";
import redGrapes from "../images/emojis/RedGrapes.png";
import wineShop from "../images/emojis/WineShop.png";
import cherry from "../images/emojis/Cherry.png";
import cabernet from "../images/emojis/Cabernet.png";
import redBottle from "../images/emojis/RedBottle.png";
import chardonnay from "../images/emojis/Chardonnay.png";

const dataJSON = [
  {
    name: "emoticon_birthday",
    img: birthday,
    id: "1",
  },
  {
    name: "emoticon_delicious",
    img: delicious,
    id: "2",
  },
  {
    name: "emoticon_two-thumbs",
    img: twoThumbs,
    id: "3",
  },
  {
    name: "emoticon_heart",
    img: love,
    id: "4",
  },

  {
    name: "emoticon_red-grapes",
    img: redGrapes,
    id: "5",
  },
  {
    name: "moticon_wine-shop",
    img: wineShop,
    id: "6",
  },
  {
    name: "emoticon_cherry",
    img: cherry,
    id: "7",
  },
  {
    name: "emoticon_cabernet",
    img: cabernet,
    id: "8",
  },
  {
    name: "emoticon_red-bottle",
    img: redBottle,
    id: "9",
  },
  {
    name: "emoticon_chardonnay",
    img: chardonnay,
    id: "10",
  },
  {
    name: "emoticon_winetasting",
    img: love,
    id: "10",
  },
];

const Post: React.FC = () => {
  const { id } = useParams();
  const user_id = useSelector<RootState, number>((state) => state.auth.user.id);
  const dispatch = useDispatch();
  const isDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const loading = useSelector<RootState, boolean>(
    (state) => state.post.loading
  );
  const post = useSelector<RootState, PostDetail>((state) => state.post.post);
  const history = useHistory();
  const [query, setQuery] = useState("");
  const [searchEnabled, setSearchEnabled] = useState(false);

  var arrayWithHash: any[] = [];
  var zzz;
  var arrayTempEmoji: any[] = [];

  useEffect(() => {
    dispatch(getPostDetail(id, user_id));
    // eslint-disable-next-line
  }, [id]);
  const onCleared = () => {
    setQuery("");
  };

  const onSearchClicked = (e: any) => {
    // e.preventDefault();
    dispatch(searchQueryAction(query));
    if (query.length > 2) {
      history.push("/search");
    } else {
      dispatch(setAlert("Enter at least 3 characters", "danger"));
    }
  };

  const getComment = () => {
    let a, b;
    var c = [];
    var z: any[] = [];
    var zz;
    a = post.comment;
    if (a) {
      b = a.split(" ");
      c = b;
      c.map((e) => {
        let cb = e.split("")[0];
        if (cb === "#") {
          return arrayWithHash.push(e);
        } else {
          z.push(e);
          zz = z.toString();
          return (zzz = zz.replace(/,/g, " "));
        }
      });
    }
  };
  getComment();

  const getEmojis = () => {
    let convertEmojiStringInArray: any[] = [];
    let a = post.emoji;

    if (a) {
      convertEmojiStringInArray = a.split(",");

      convertEmojiStringInArray.map((e) => {
       return dataJSON.filter((ele) => {
          if (ele.name === e) {
             arrayTempEmoji.push(ele);
          }
          return arrayTempEmoji;
        });
      });
    }
  };
  getEmojis();
  const onUserClicked = () => {
    dispatch(fetchProfileAction());
    history.push(`/profile/${post.user_id}`);
  };

  const profileUrl =
    post && post.facebook_uid
      ? `//graph.facebook.com/${post.facebook_uid}/picture`
      : post.attributes && post.attributes.photo_url
      ? `${API_ENDPOINT}/${post.attributes.photo_url}`
      : avatar;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-text-center">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/posts"></IonBackButton>
          </IonButtons>
          {isDarkMode ? (
            <img
              className="header-logo"
              alt="White Vault29 Logo"
              src={logoWhite}
            />
          ) : (
            <img
              className="header-logo"
              alt="Black Vault29 Logo"
              src={logoBlack}
            />
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {searchEnabled && (
          <IonItem lines="none">
            <IonSearchbar
              value={query}
              placeholder="Search"
              onKeyDown={(e) => e.key === "Enter" && onSearchClicked(e)}
              onIonChange={(e) => setQuery(e.detail.value!)}
              onIonCancel={() => onCleared()}
              onIonClear={() => onCleared()}
            ></IonSearchbar>
            <IonButton fill="clear" onClick={(e) => onSearchClicked(e)}>
              <IonIcon slot="icon-only" icon={searchOutline}></IonIcon>
            </IonButton>
          </IonItem>
        )}
        {loading ? (
          <IonSpinner />
        ) : (
          <IonCard>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonAvatar slot="start">
                      <img alt="User Icon" src={profileUrl} />
                    </IonAvatar>

                    <IonLabel>
                      <IonText onClick={() => onUserClicked()}>
                        <h1>{post.name}</h1>
                      </IonText>
                      <IonText>
                        <span className="icon-location">
                          <IonIcon slot="start" src={locationOutline} />
                        </span>
                        {post.venue}
                      </IonText>
                    </IonLabel>
                  </IonItem>
                </IonCol>
                <IonCol size="auto">
                  <IonItem>
                    <IonIcon slot="start" src={timeOutline} />
                    <IonLabel className="ion-text-wrap">
                      {moment(post.created_at).fromNow()}
                    </IonLabel>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <img alt="Post" src={`${API_ENDPOINT}/${post.photo_url}`} />
              </IonRow>
            </IonGrid>

            <IonCardContent>
              <h1>
                {zzz}{" "}
                {arrayWithHash.map((e, key) => {
                  return (
                    <a
                      key={key}
                      id={"a" + key}
                      className="link-decoration"
                      onClick={(ee) => {
                        setQuery(e);
                        setSearchEnabled(!searchEnabled);
                        onSearchClicked(ee);
                      }}
                    >
                      {" "}
                      {e}
                    </a>
                  );
                })}{" "}
              </h1>
            </IonCardContent>
            <div>
               { arrayTempEmoji.map((e, key) => {
                for (var i = 0; i < dataJSON.length; i++) {
                  if (dataJSON[i].name === e.name) {
                    return (
                      <img
                        key={key}
                        src={dataJSON[i].img}
                        className="imgStyle"
                        alt="imageError"
                      />
                    );
                  }
                }
                return dataJSON ;
              })}
            </div>
            <IonGrid>
              <IonRow>
                <IonCol size="4">
                  <IonItem>
                    <IonIcon slot="start" src={heartOutline} />
                    <p className="pStyle">{post.attributes.like_count} Like </p>
                  </IonItem>
                </IonCol>
                <IonCol size="4">
                  <IonItem>
                    <IonIcon slot="start" src={chatbubbleEllipsesOutline} />
                    <p id="commentId" className="pStyle">
                      {post.attributes.comment_count} Comment{" "}
                    </p>
                  </IonItem>
                </IonCol>
                <IonCol size="2">
                  <IonItem>
                    <IonIcon
                      slot="start"
                      className="pStyle"
                      src={starOutline}
                    />
                  </IonItem>
                </IonCol>
                <IonCol size="2">
                  <IonItem>
                    <IonIcon slot="end" src={ellipsisVerticalOutline} />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Post;
