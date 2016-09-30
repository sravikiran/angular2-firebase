import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-admin',
	templateUrl: './src/admin.component.html'
})
export class AdminComponent implements OnInit {

	schedule: FirebaseListObservable<any>;
	delay: number;
	constructor(route: ActivatedRoute, private firebase: AngularFire) {
		this.schedule = firebase.database.list('/schedule');
		this.delay = 0;
	}

	increment(item) {
		item.delay += 1;
		item.expectedTimeOfArrival = this.addMinutes(item, 1);

	}

	decrement(item) {
		if (item.delay > 0) {

			item.delay -= 1;
			item.expectedTimeOfArrival = this.deductMinutes(item, 1);
		}
	}

	addMinutes(item, minutes) {
		let lTime: Date = new Date(item.expectedTimeOfArrival);
		lTime.setMinutes(lTime.getMinutes() + minutes);
		return lTime;
	}

	deductMinutes(item, minutes) {
		let lTime: Date = new Date(item.expectedTimeOfArrival);
		lTime.setMinutes(lTime.getMinutes() - minutes);
		return lTime;
	}

	save(item) {
		console.log(item.delayReason);
		this.schedule.update(item.$key, {
			expectedTimeOfArrival: item.expectedTimeOfArrival,
			delay: item.delay,
			delayReason: item.delayReason
		});
	}

	ngOnInit() {
	}

}
