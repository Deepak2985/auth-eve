import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'ctl-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  err;
  events = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe(
      res => this.events = res,
      err => {
        this.err = err;
        console.log(err);
      }
    )
  }
}
