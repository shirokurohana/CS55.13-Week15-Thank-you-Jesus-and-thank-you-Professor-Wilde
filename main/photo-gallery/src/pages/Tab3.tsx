import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Thank you CS 55.13 classmates!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Have a wonderful rest of your day!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Thank you CS 55.13 classmates!" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
