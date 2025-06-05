import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Tab1.css'

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NotFound</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NotFound</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton routerLink="/tabs/tab1" routerDirection="back">
          Tab 1
        </IonButton>
      </IonContent>
    </IonPage>
  )
}

export default NotFoundPage
