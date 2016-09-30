import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { BusStatusComponent } from "./bussatus.component";
import { AdminComponent } from "./admin.component";

export var routes: Routes = [
	{ path: '', component: BusStatusComponent },
	{ path: 'admin', component: AdminComponent }
];

export const App_Routing: ModuleWithProviders = RouterModule.forRoot(routes);
