import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab1.css'

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/login" routerDirection="back">
          Go to Login
        </IonButton>
        <IonButton routerLink="/tabs/tab1/page1">Page 1</IonButton>
        <IonButton routerLink="/tabs/tab4">Go to Invalid Route</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Tab1
