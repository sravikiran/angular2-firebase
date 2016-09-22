import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {NgModule} from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, FormsModule],
	bootstrap: [AppComponent]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
