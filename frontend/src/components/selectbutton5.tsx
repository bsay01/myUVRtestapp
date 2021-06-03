import React, {useState} from 'react';
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonInput, IonItem, IonSelect, IonSelectOption, IonText, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';

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
import { attachProps } from '@ionic/react/dist/types/components/utils';

import { exit } from 'process';

interface Props {
  selectTitle: string;
  btnTitles: string[];
}

const SelectButton5: React.FC<Props> = props => {

  const defaultColours: string[] = ['primary', 'primary', 'primary', 'primary', 'primary'];
  var colours: string[] = defaultColours;

  const [pressedButton, setPressedButton] = useState<number>(0);

  function setColour(n: number) { //n should never be 0, a safety check for this is not implemented
    
/*  n == pressedButton
      colours = defaultColours;
      setPressedButton(0);
    n == 1
      colours = ['danger', 'primary', 'primary', 'primary', 'primary'];
      setPressedButton(1);
    n == 2
      colours = ['primary', 'danger', 'primary', 'primary', 'primary'];
      setPressedButton(2);
    n == 3
      colours = ['primary', 'primary', 'danger', 'primary', 'primary'];
      setPressedButton(3);
    n == 4
      colours = ['primary', 'primary', 'primary', 'danger', 'primary'];
      setPressedButton(4);
    n == 5
      colours = ['primary', 'primary', 'primary', 'primary', 'danger'];
      setPressedButton(5);                                               */

    colours = defaultColours; //set colours to default
    if (n != pressedButton){
      colours[n - 1] = 'danger'; //set colours[pressedButton - 1] = 'danger' if n not the same as the button pressed last
      setPressedButton(n);
    }else{
      setPressedButton(0); //set pressedButton to 0 and don't change colours from default if n the same as the button pressed last
    } 
    
    //makes the titles the colour of the button
    //for(var i:number = 0; i < 5; i++) props.btnTitles[i] = colours[i];
  }

  return(
    <IonCard>
      <IonCardHeader>
        {props.selectTitle}
      </IonCardHeader>

      <IonCardContent>
        <IonButton onClick={() => [setColour(1)]} color={colours[0]}>
          {props.btnTitles[0]}
        </IonButton>

        <IonButton onClick={() => [setColour(2)]} color={colours[1]}>
          {props.btnTitles[1]}
        </IonButton>

        <IonButton onClick={() => [setColour(3)]} color={colours[2]}>
          {props.btnTitles[2]}
        </IonButton>

        <IonButton onClick={() => [setColour(4)]} color={colours[3]}>
          {props.btnTitles[3]}
        </IonButton>

        <IonButton onClick={() => [setColour(5)]} color={colours[4]}>
          {props.btnTitles[4]}
        </IonButton>

      </IonCardContent>
    </IonCard>
  );
}

export default SelectButton5;