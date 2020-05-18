import React from "react";
import "./JoinPage.css";
import {
  IonImg,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonInput,
  IonItem,
  IonButton,
  IonToast,
} from "@ionic/react";
import icon from "../Images/consumer-inactive.png";

class JoinPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      emailText: "",
      userNameText: "",
      passwordText: "",
      nameText: "",
      c_passwordText: "",
      email: false,
      emailError: "",
      userName: false,
      password: false,
      asswordError: "",
      userNameError: "",
      emailExist: false,
      emailExistError: "",
      c_password: false,
      C_PasswordError: "",
    };
  }

  joinClick = (props: any) => {
    const state = {
      username: this.state.userNameText,
      business_name: this.state.nameText,
      email: this.state.emailText,
      user_type: "Consumer",
      account_type: "Email",
      password: this.state.passwordText,
    };
    console.log("state", state);
    fetch("https://vault29-backend.innoventestech.in/v2/user/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    }).then((result) => {
      result
        .json()
        .then((res) => {
          console.log(res);

          if (res.success === "true") {
            props.history.push("/loginpage");
          }

          const emailVar = res.message.email;
          const emailExistVar = res.message;
          const passwordVar = res.message.password;
          const userNameVar = res.message.username;

          if (res.message.password) {
            if (passwordVar.length > 0) {
              this.setState({
                password: true,
                passwordError: passwordVar,
              });
            }
          }

          if (res.message.email) {
            if (emailVar.length > 0) {
              this.setState({
                email: true,
                emailError: emailVar,
              });
            }
            if (userNameVar.length > 0) {
              this.setState({
                userName: true,
                userNameError: userNameVar,
              });
            }
          } else {
            if (this.state.passwordText !== this.state.c_passwordText) {
              this.setState({
                c_password: true,
                C_PasswordError: "Confirm Password Mismatch",
              });
            } else if (
              emailExistVar === "Email with Account Type Already Registered"
            ) {
              this.setState({
                emailExist: true,
                emailExistError: emailExistVar,
              });
            }
          }
        })
        .catch((errorJoin) => {
          console.log("errorJoin", errorJoin);
        });
    });
  };

  render() {
    return (
      <div>
        <IonPage>
          <IonContent className="bg-img-join">
            <IonGrid>
              <IonRow>
                <IonCol className="ion-text-center">
                  <IonImg
                    src={icon}
                    alt="topImgJoin"
                    className="top-img-join"
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="ion-padding">
                  <IonTitle className="ion-text-center" id="add-photo-txt">
                    Add Photo
                  </IonTitle>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem color="transparent" className="name-item">
                    <IonInput
                      placeholder="Name"
                      className="name-txtbx"
                      type="text"
                      onIonChange={(e) =>
                        this.setState({ nameText: e.detail.value })
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem color="transparent" className="username-item">
                    <IonInput
                      placeholder="Username"
                      className="username-txtbx"
                      type="text"
                      onIonChange={(e) =>
                        this.setState({ userNameText: e.detail.value })
                      }
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem color="transparent" className="email-item">
                    <IonInput
                      placeholder="Email Address"
                      className="email-txtbx"
                      type="email"
                      onIonChange={(e) => {
                        this.setState({ emailText: e.detail.value });
                      }}
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem color="transparent" className="password-item">
                    <IonInput
                      placeholder="Password"
                      className="password-txtbx"
                      type="password"
                      onIonChange={(e) =>
                        this.setState({ passwordText: e.detail.value })
                      }
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem
                    color="transparent"
                    className="confirm-password-item"
                  >
                    <IonInput
                      placeholder="Confirm Password"
                      className="confirm-password-txtbx"
                      type="password"
                      onIonChange={(e) =>
                        this.setState({ c_passwordText: e.detail.value })
                      }
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem color="transparent" className="location-item">
                    <IonInput
                      placeholder="Location"
                      className="location-txtbx"
                      type="text"
                    ></IonInput>
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton
                    size="large"
                    expand="block"
                    strong
                    fill="outline"
                    className="btn-join-joinpage"
                    onClick={() => this.joinClick({ ...this.props })}
                  >
                    {" "}
                    JOIN
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>

        <IonToast
          isOpen={this.state.email}
          onDidDismiss={() => this.setState({ email: false })}
          message={this.state.emailError}
          position="top"
          duration={2000}
          color="light"
        />
        <IonToast
          isOpen={this.state.password}
          onDidDismiss={() => this.setState({ password: false })}
          message={this.state.passwordError}
          position="top"
          duration={2000}
          color="light"
        />
        <IonToast
          isOpen={this.state.userName}
          onDidDismiss={() => this.setState({ userName: false })}
          message={this.state.userNameError}
          position="top"
          duration={2000}
          color="light"
        />
        <IonToast
          isOpen={this.state.emailExist}
          onDidDismiss={() => this.setState({ emailExist: false })}
          message={this.state.emailExistError}
          position="top"
          duration={2000}
          color="light"
        />
        <IonToast
          isOpen={this.state.c_password}
          onDidDismiss={() => this.setState({ c_password: false })}
          message={this.state.C_PasswordError}
          position="top"
          duration={2000}
          color="light"
        />
      </div>
    );
  }
}

export default JoinPage;
