import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable, of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: null, text: null, date: null });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'Generated components', date: new Date('12/26/2018 12:54:23') },
      { id: '2', text: 'Added bootstrap', date: new Date('12/27/2018 9:25:00') },
      { id: '3', text: 'Added logs components', date: new Date('10/15/2018 7:54:15') }
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);

  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }
}
