import { Component, OnInit } from "@angular/core";
import { BusService } from "./bus.service";
import { Bus } from "./bus.model";
import { Inject } from "@angular/core";

@Component({
	selector: "app",
	templateUrl: "./app/app.component.html",
	providers: [BusService]
})
export class AppComponent {}
