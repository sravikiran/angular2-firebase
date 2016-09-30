/// <reference path="../node_modules/firebase/firebase.d.ts" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from 'angularfire2';

import { AppComponent } from "./app.component";
import { BusStatusComponent } from "./bussatus.component";
import { AdminComponent } from "./admin.component";
import { BusService } from "./bus.service";
import {App_Routing} from "./app.routes";

  // ensure to export the configuration.
  export const config = {
    apiKey: "AIzaSyDR8pSPQpt15VulnWwqkww8G3UBmDkSiLY",
    authDomain: "gdg-bustracker.firebaseapp.com",
    databaseURL: "https://gdg-bustracker.firebaseio.com",
    storageBucket: "gdg-bustracker.appspot.com"
  };

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule, App_Routing, AngularFireModule.initializeApp(config)],
	declarations: [AppComponent, BusStatusComponent, AdminComponent],
	providers: [BusService],
	bootstrap: [AppComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
