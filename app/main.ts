import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { BusStatusComponent } from "./bussatus.component";
import { BusEditComponent } from "./busedit.component";
import { BusService } from "./bus.service";
import {App_Routing} from "./app.routes";

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule, RouterModule, App_Routing],
	declarations: [AppComponent, BusStatusComponent, BusEditComponent],
	providers: [BusService],
	bootstrap: [AppComponent]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
