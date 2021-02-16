import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import Angular, { useState } from 'angular';
import { addDecorator } from "@storybook/angular";
import {IonApp, IonContent, IonPage, IonList, IonButton } from "@ionic/angular"
import "@ionic/angular/css/core.css"
import "@ionic/angular/css/normalize.css";
import "@ionic/angular/css/structure.css";
import "@ionic/angular/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/angular/css/padding.css";
import "@ionic/angular/css/float-elements.css";
import "@ionic/angular/css/text-alignment.css";
import "@ionic/angular/css/text-transformation.css";
import "@ionic/angular/css/flex-utils.css";
import "@ionic/angular/css/display.css";


setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
