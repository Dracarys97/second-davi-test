import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentMethod } from './MethodsInterface';
import { methods } from './payment-methods';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
})
export class PaymentMethodComponent implements OnInit {
  constructor(private router: Router) {}
  methods: PaymentMethod[] = methods;
  form = new FormGroup({
    paymentTime: new FormControl('', Validators.required),
    paymentType: new FormControl('', Validators.required),
  });
  goBack() {
    this.router.navigateByUrl('/transfer-form');
  }
  onSubmit() {
    this.router.navigateByUrl('/transfers-page');
  }
  ngOnInit(): void {}
  handleChange(evt: any) {
    console.log(this.form);
  }
}
