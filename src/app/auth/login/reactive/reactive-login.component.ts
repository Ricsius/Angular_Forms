import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  standalone: true,
  templateUrl: './reactive-login.component.html',
  styleUrl: '../login.component.css',
  imports: [ReactiveFormsModule]
})
export class ReactiveLoginComponent {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    console.log(this.form);
    console.log(email);
    console.log(password);
  }
}
