import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React from 'react';
import { useParams, useHistory } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

import { useAuth } from "../AuthContext";

const Page: React.FC = () => {

  const {logOut} = useAuth();
  const { name } = useParams<{ name: string; }>();
  const history = useHistory();

  const doLogout = async () => {
    await logOut();
    history.replace("/login-page");
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
          <IonButtons  slot="end">
            <IonButton onClick={doLogout}>LOGOUT</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
