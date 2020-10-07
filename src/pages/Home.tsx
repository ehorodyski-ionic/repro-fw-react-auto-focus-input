import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React, { Component, useState } from "react";
import AutoFocusInput from "../components/AutoFocusInput";
import "./Home.css";

type HomeState = {
  username: string;
  password: string;
};

export class HomeClassComponent extends Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    this.state = { username: "", password: "" };
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Auto Focus Input</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Auto Focus Input</IonTitle>
            </IonToolbar>
          </IonHeader>

          <form>
            <IonItem>
              <IonLabel position="stacked">Username</IonLabel>
              <AutoFocusInput
                type="text"
                onIonChange={(e: any) =>
                  this.setState({ username: e.detail.value! })
                }
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput
                type="password"
                onIonChange={(e) =>
                  this.setState({ password: e.detail.value! })
                }
              />
            </IonItem>
            <IonButton expand="full">Test</IonButton>
          </form>
          <div>{this.state && this.state.username}</div>
          <div>{this.state && this.state.password}</div>
        </IonContent>
      </IonPage>
    );
  }
}

const Home: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Auto Focus Input</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Auto Focus Input</IonTitle>
          </IonToolbar>
        </IonHeader>

        <form>
          <IonItem>
            <IonLabel position="stacked">Username</IonLabel>
            <AutoFocusInput
              type="text"
              onIonChange={(e: any) => setUsername(e.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
          <IonButton expand="full">Test</IonButton>
        </form>
        <div>{username}</div>
        <div>{password}</div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
