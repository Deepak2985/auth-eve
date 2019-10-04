import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'ctl-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  err;
  events = [];
  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
    this.eventService.getSpecialEvents().subscribe(
      res => this.events = res,
      err => {

        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
              this.router.navigate(['/login']);
            }
        }
        this.err = err;
      }
    );
  }
}
