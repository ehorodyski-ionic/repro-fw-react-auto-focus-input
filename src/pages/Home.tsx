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
import React from "react";
import AutoFocusInput from "../components/AutoFocusInput";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form>
          <IonItem>
            <IonLabel position="stacked">Username</IonLabel>
            <AutoFocusInput
              type="text"
              onIonChange={(e: any) => console.log(e.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput type="password" />
          </IonItem>
          <IonButton expand="full">Test</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Home;
