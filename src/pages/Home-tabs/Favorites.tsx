

import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonItem, IonLabel, IonList, IonListHeader, IonSearchbar, IonButton, IonAlert } from '@ionic/react';
import React from 'react';

const Favorites: React.FC = () =>{

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Favorites</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <h1>Favorites</h1>
              </IonContent>
              </IonPage>
      );
    

};
export default Favorites;