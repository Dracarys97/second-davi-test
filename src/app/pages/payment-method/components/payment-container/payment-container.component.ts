import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentMethod } from '../../MethodsInterface';

@Component({
  selector: 'app-payment-container',
  templateUrl: './payment-container.component.html',
  styleUrls: ['./payment-container.component.scss'],
})
export class PaymentContainerComponent implements OnInit {
  open = false;

  @Input()
  orderForm: FormGroup = new FormGroup({
    paymentType: new FormControl('', Validators.required),
  });
  @Input() paymentMethod: PaymentMethod = {
    title: '',
    price: '',
    img: '',
    disclosures: [],
  };

  ngOnInit(): void {}
  openDropDown = () => {
    this.open = !this.open;
  };
  handleChange(evt: any) {
    console.log(this.orderForm);
  }
}
