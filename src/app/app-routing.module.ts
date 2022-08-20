import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';

import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { TransferFormComponent } from './pages/transfer-form/transfer-form.component';
const routes: Routes = [
  { path: '', redirectTo: '/transfers-page', pathMatch: 'full' },
  { path: 'transfers-page', component: TransferPageComponent },
  { path: 'transfer-form', component: TransferFormComponent },
  { path: 'payment-method', component: PaymentMethodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
