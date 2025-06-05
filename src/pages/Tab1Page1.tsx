import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab1.css'

const Tab1Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1 Page 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/login" routerDirection="back">
          Go to Login
        </IonButton>
        <IonButton routerLink="/tabs/tab1" routerDirection="back">
          Go to Tab 1
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab1Page1
