import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-list',
  templateUrl: './src/busstatus.component.html'
})
export class BusStatusComponent {
  buses: Array<any>;
  constructor(){
    
  }
}

/*
  [{"delay":9,"delayReason":"On time.","expectedTimeOfArrival":"2016-10-02T04:59:00.000Z","from":"Hyderabad","scheduledTimeOfArrival":"10/02/2016  10:00","to":"Bengaluru","$key":"A2F001"},{"delay":120,"delayReason":"Late start due to heavy rain","expectedTimeOfArrival":"10/02/2016  12:00","from":"Hyderabad","scheduledTimeOfArrival":"10/02/2016  14:00","to":"Pune","$key":"A2F002"},{"delay":60,"delayReason":"Security check heldup","expectedTimeOfArrival":"2016-10-02T01:30:00.000Z","from":"Chennai","scheduledTimeOfArrival":"10/02/2016  08:00","to":"Bengaluru","$key":"A2F003"},{"delay":300,"delayReason":"Heavy traffic on national highway","expectedTimeOfArrival":"10/02/2016  12:00","from":"Pune","scheduledTimeOfArrival":"10/02/2016  17:00","to":"Chennai","$key":"A2F004"},{"delay":0,"delayReason":"N/A","expectedTimeOfArrival":"10/02/2016  15:00","from":"Hyderabad","scheduledTimeOfArrival":"10/02/2016  15:00","to":"Bengaluru","$key":"A2F005"},{"delay":0,"delayReason":"N/A","expectedTimeOfArrival":"10/02/2016  16:00","from":"Hyderabad","scheduledTimeOfArrival":"10/02/2016  16:00","to":"Bengaluru","$key":"A2F006"}]
 */