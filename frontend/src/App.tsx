import React from 'react';
import { IonApp, IonButton, IonCard, IonInput, IonText, IonTextarea } from '@ionic/react';

import './api-interface.css';

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

const App: React.FC = () => (
  <IonApp>
    <head>
        <link rel="stylesheet" href="api-interface.css"></link>
        <title>Test API Interface Website</title>
    </head>

    <body>

        <h1>Test API Interface Website</h1>
        <a href="">reload</a>

        <section className='textbox'>
            <h2>Links to other pages</h2>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">another page</a>
        </section>

        <main>
            <h1>API Interface</h1>

            <p>this is a paragraph</p>

            <IonTextarea autoGrow={true} enterkeyhint="enter" name="insert text here" placeholder="type stuff!" rows={4}></IonTextarea>

            <IonButton color='secondary'>Click me!</IonButton>
            
            <script src="index.js"></script>
        </main>

        <a href="">reload</a>

    </body>
  </IonApp>
);

export default App;
