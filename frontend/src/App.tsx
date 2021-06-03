import React, {useRef, useState} from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';

import './theme/api-interface.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* my event class */
//import todoEvent from './eventclass';

/* components */
import './components/selectbutton5';
import SelectButton5 from './components/selectbutton5';

const App: React.FC = () => {

  let event_type:string = "";
  let priority:number = 0;

  //submit button

  //edit events button

  return(  
  <IonApp>
    <IonHeader>
        <link rel="stylesheet" href="api-interface.css"></link>
        <title>Test API Interface Website</title>
    </IonHeader>

    <IonToolbar>
      <IonTitle>Test API Interface Website</IonTitle>
      //toolbar and search
    </IonToolbar>

    <IonContent>

        <IonHeader>
          <h1>API Interface - Calendar / To-Do</h1>
          <h2>enter an event to be loaded into the glorified to-do list</h2>
        </IonHeader>

        <IonCard>
          <IonCardHeader>Event name:</IonCardHeader>
          <IonCardContent>
            <IonTextarea autoGrow={false} enterkeyhint="enter" name="name" placeholder="event name here" rows={1}></IonTextarea>
          </IonCardContent>
        </IonCard>

        <IonCard>
        <IonCardHeader>Event description:</IonCardHeader>
        <IonCardContent>
          <IonTextarea 
            autoGrow={false}
            enterkeyhint="enter" 
            name="desc" 
            placeholder="event description here"
            rows={2}
            ></IonTextarea>
        </IonCardContent>
        </IonCard>

        <SelectButton5
          selectTitle="Type:" 
          btnTitles={["school", "work", "social", "physical activity", "fun"]}
        ></SelectButton5>

        <IonCard>
          <IonCardHeader>
            Priority:
          </IonCardHeader>

          <IonCardContent>
            <IonButton>low</IonButton>
            <IonButton>mid-low</IonButton>
            <IonButton>mid-high</IonButton>
            <IonButton>high</IonButton>
            <IonButton>extra!</IonButton>
          </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardHeader>Event time:</IonCardHeader>
          <IonCardContent>
            <IonTextarea autoGrow={false} enterkeyhint="enter" name="t" placeholder="ex. '1:00:3:45'" rows={1}></IonTextarea>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>Event prep time start:</IonCardHeader>
          <IonCardContent>
            <IonTextarea autoGrow={false} enterkeyhint="enter" name="pt" placeholder="ex. '12:45'" rows={1}></IonTextarea>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>Event buffer time end:</IonCardHeader>
          <IonTextarea autoGrow={false} enterkeyhint="enter" name="bt" placeholder="ex. '4:00'" rows={1}></IonTextarea>
        </IonCard>

        <IonButton color='tertiary'>submit</IonButton>
        <IonButton color='tertiary'>edit events mode</IonButton>
        
    </IonContent>

  </IonApp>
  );

};

export default App;
