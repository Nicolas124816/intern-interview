import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RoomPay, SquareFootRequest } from './app';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>
  `
})
export class AppComponent {
  constructor(private appService: AppService) {
  }
  title = 'Rent-Web';
  value = '';
  
  update(value: string) { this.value = value; }

  sqValues = new FormGroup({
    sq1: new FormControl(0, Validators.required),
    sq2: new FormControl(0),
    sq3: new FormControl(0),
    sq4: new FormControl(0),
    sq5: new FormControl(0),
    sq6: new FormControl(0),
    sq7: new FormControl(0),
    sq8: new FormControl(0),
    sqTotal: new FormControl(0),
    totalPrice: new FormControl(0),
    roommateNumber: new FormControl(0),
  });
  resetValues() {
    this.sqValues.setValue({
      sq1: 0, 
      sq2: 0,
      sq3: 0,
      sq4: 0, 
      sq5: 0,
      sq6: 0,
      sq7: 0, 
      sq8: 0,
      sqTotal: 0,
      totalPrice: 0,
      roommateNumber: 0,
    });
  }
  result = new RoomPay([]);

  onSubmit() {
    const request = new SquareFootRequest(this.sqValues.value.sq1, this.sqValues.value.sq2, this.sqValues.value.sq3, this.sqValues.value.sq4, this.sqValues.value.sq5, this.sqValues.value.sq6, this.sqValues.value.sq7, this.sqValues.value.sq8, this.sqValues.value.sqTotal, this.sqValues.value.totalPrice, this.sqValues.value.roommateNumber);
    this.appService.calculate(request).subscribe((data: RoomPay) => {this.result = data;});
  }
}

