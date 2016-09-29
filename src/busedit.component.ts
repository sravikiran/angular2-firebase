import { Component, OnInit } from "@angular/core";
import { Inject } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { BusService } from "./bus.service";
import { Bus } from "./bus.model";

@Component({
	selector: "bus-edit",
	templateUrl: "./src/busedit.component.html",
	providers: [BusService]
})
export class BusEditComponent implements OnInit {
	bus: Bus;

	constructor(private busService: BusService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.route.params.subscribe((queryParams) => {
			let busId: string = queryParams['id'];
			this.bus = this.busService.getBus(busId);
		});
	}

	submit() {
		this.router.navigate(['']);
	}
}
