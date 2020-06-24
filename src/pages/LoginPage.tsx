import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonInput,
  IonItem,
  IonButton,
} from "@ionic/react";
import React from "react";
import "./Page.css";
import { useHistory } from "react-router";

import { useAuth } from "../AuthContext";

const LoginPage: React.FC = () => {
  const { logIn } = useAuth();

  const doLogin = async () => {
    await logIn(email, "password");
    history.replace("/page/Inbox");
  };

  const [email, setEmail] = React.useState("");
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGIN PAGE</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>EMAIL</IonLabel>
          <IonInput
            onIonChange={(e) => setEmail(e.detail.value as string)}
          ></IonInput>
        </IonItem>
        <IonButton onClick={() => doLogin()}>LOGIN</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
