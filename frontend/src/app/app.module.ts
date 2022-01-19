import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { PasswordComponent } from './views/password/password.component';

// PrimeNg
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { SpinBarComponent } from './components/spin-bar/spin-bar.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PasswordFieldComponent } from './components/password-field/password-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PasswordComponent,
    SpinBarComponent,
    PasswordFieldComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    CardModule,
    InputNumberModule,
    ButtonModule,
    InputTextModule,
    ProgressSpinnerModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
