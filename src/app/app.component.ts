import { Component } from '@angular/core';

import { LoginComponent } from './auth/login/login.component';
import { ReactiveLoginComponent } from './auth/login/reactive/reactive-login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [LoginComponent, ReactiveLoginComponent],
})
export class AppComponent {}
