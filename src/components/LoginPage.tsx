import React from "react";
import "./LoginPage.css";
import topPic from "../Images/icon.png";
import {
  IonImg,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonItem,
  IonInput,
  IonButton,
  IonToast,
} from "@ionic/react";
import { Link } from "react-router-dom";

class LoginPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordError: false,
      emailError: false,
      emailMessageError: "",
      loginErrorMessage: "",
      messageNormal: false,
      messageErrorNormal: "",
      passwordInvalid: false,
      passwordInvalidError: "",
    };
  }
  login = (props: any) => {
    const state = { email: this.state.email, password: this.state.password };
    console.log("login state", state);
    fetch("https://vault29-backend.innoventestech.in/v2/user/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((result) => {
      result
        .json()
        .then((response) => {
          console.log("response", response);
          localStorage.setItem("token", JSON.stringify(response.token));
          const token = localStorage.getItem("token");
          this.setState({ successStatus: response.success });

          const successVar = response.success;
          if (successVar === "true") {
            props.history.push("/wineWallpage");
          }

          const emailErrorVar = response.message.email;
          const loginErrorVar = response.message.email;
          const normalErrorVar = response.message;
          const Response_Message_Content = response.message;

          if (response.message.email) {
            if (emailErrorVar.length > 0) {
              this.setState({
                emailError: true,
                emailMessageError: emailErrorVar,
              });
            }

            if (loginErrorVar.length > 0) {
              this.setState({
                loginError: true,
                loginErrorMessage: this.state.loginErrorMessage,
              });
            }
          } else {
            if (normalErrorVar === "Email id is not registered") {
              this.setState({
                messageNormal: true,
                messageErrorNormal: normalErrorVar,
              });
            }

            if (
              Response_Message_Content === "Invalid Password, Case Sensitive"
            ) {
              this.setState({
                passwordInvalid: true,
                passwordInvalidError: Response_Message_Content,
              });
            }
          }
        })
        .catch((resError) => {
          console.log("resError", resError);
        });
    });
  };

  render() {
    return (
      <div>
        <IonPage>
          <IonContent className="bg-img-login">
            <IonGrid>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonImg src={topPic} alt="topPic" className="top-img-login" />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonTitle className="login-txt">LOG IN</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonItem className="email-ion-item" color="transparent">
                    <IonInput
                      type="email"
                      className="email-txt"
                      placeholder="Email Address"
                      onIonChange={(e) =>
                        this.setState({ email: e.detail.value })
                      }
                      value={this.state.email}
                    />
                  </IonItem>
                  <IonToast
                    isOpen={this.state.emailError}
                    onDidDismiss={() => this.setState({ emailError: false })}
                    message={this.state.emailMessageError}
                    duration={2000}
                    position="top"
                    color="light"
                  />

                  <IonToast
                    isOpen={this.state.loginErrorMessage}
                    onDidDismiss={() =>
                      this.setState({ loginErrorMessage: false })
                    }
                    message={this.state.loginErrorMessage}
                    duration={2000}
                    position="top"
                    color="light"
                  />
                  <IonToast
                    isOpen={this.state.messageNormal}
                    onDidDismiss={() => this.setState({ messageNormal: false })}
                    message={this.state.messageErrorNormal}
                    duration={2000}
                    position="top"
                    color="light"
                  />

                  <IonToast
                    isOpen={this.state.passwordInvalid}
                    onDidDismiss={() =>
                      this.setState({ passwordInvalid: false })
                    }
                    message={this.state.passwordInvalidError}
                    duration={2000}
                    position="top"
                    color="light"
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonItem className="pass-ion-item" color="transparent">
                    <IonInput
                      type="password"
                      className="password-login"
                      placeholder="Password"
                      onIonChange={(e) =>
                        this.setState({ password: e.detail.value })
                      }
                      value={this.state.password}
                    />
                  </IonItem>
                  <IonToast
                    isOpen={this.state.passwordError}
                    onDidDismiss={() => this.setState({ passwordError: false })}
                    message="Your settings have been saved."
                    duration={2000}
                    position="top"
                    color="light"
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <div className="div-btn">
                    <IonButton
                      fill="outline"
                      expand="block"
                      strong
                      size="large"
                      className="btn-login"
                      onClick={() => this.login({ ...this.props })}
                    >
                      LOG IN
                    </IonButton>
                  </div>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonTitle className="dash-txt bold">___</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonTitle className="new-member-txt"> New member?</IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
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
      </div>
    );
  }
}

export default LoginPage;
