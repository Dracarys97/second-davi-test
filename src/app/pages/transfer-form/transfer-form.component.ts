import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss'],
})
export class TransferFormComponent implements OnInit {
  constructor(private router: Router) {}
  form = new FormGroup({
    income: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    code: new FormControl(''),
  });
  ngOnInit(): void {}
  goBack() {
    this.router.navigateByUrl('/transfers-page');
  }
  onSubmit() {
    console.log('reactive form submitted');
    console.log(this.form);
    this.router.navigateByUrl('/payment-method');
  }
}
