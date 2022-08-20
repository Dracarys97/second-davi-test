import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-page',
  templateUrl: './transfer-page.component.html',
  styleUrls: ['./transfer-page.component.scss'],
})
export class TransferPageComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  goToForm() {
    this.router.navigateByUrl('/transfer-form');
  }
}
