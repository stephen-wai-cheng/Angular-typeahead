import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
  selector: 'app-async-observable-pipe',
  templateUrl: './async-observable-pipe.component.html',
  styleUrls: ['./async-observable-pipe.component.css']
})
export class AsyncObservablePipeComponent implements OnInit {

  time = new Observable<string> (
    (observer: Subscriber<string>) => {
      setInterval(() => observer.next(new Date().toString()), 1000);
    }
  );

  constructor() { }

  ngOnInit() {
  }
}
