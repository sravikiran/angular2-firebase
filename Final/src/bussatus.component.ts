import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-bus-list',
  templateUrl: './src/busstatus.component.html'
})
export class BusStatusComponent implements OnInit {
  buses: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    console.log(af);
    this.buses = af.database.list("/schedule");
  }

  busSelected(bus) {
    console.log(bus);
  }

  ngOnInit() {
  }

}
