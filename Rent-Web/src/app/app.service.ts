import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RoomPay, SquareFootRequest, sqVal } from './app';

import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class AppService {
    constructor(private http: HttpClient) { }

    calculate(request: SquareFootRequest): Observable<RoomPay> {
        return this.http.post<RoomPay>("http://localhost:8080/calculate", request);
    }
}