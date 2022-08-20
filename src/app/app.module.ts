import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TransferPageComponent } from './pages/transfer-page/transfer-page.component';

import { PaymentMethodComponent } from './pages/payment-method/payment-method.component';
import { TransferFormComponent } from './pages/transfer-form/transfer-form.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './pages/transfer-form/components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TransferPageComponent,

    PaymentMethodComponent,
    TransferFormComponent,
    HeaderComponent,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
