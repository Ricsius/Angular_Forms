import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

function mustContainQuestionMark(control: AbstractControl) {
  if(control.value.includes('?')) {
    return null;
  }

  return {doesNotContainQuestionMark: true};
}

@Component({
  selector: 'app-reactive-login',
  standalone: true,
  templateUrl: './reactive-login.component.html',
  styleUrl: '../login.component.css',
  imports: [ReactiveFormsModule]
})
export class ReactiveLoginComponent {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [ Validators.required, Validators.email ]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    })
  });

  get emailIsInvalid() {
    return this.form.controls.email.touched 
    && this.form.controls.email.dirty 
    && this.form.controls.email.invalid;
  }

  get passwordIsInvalid() {
    return this.form.controls.password.touched 
    && this.form.controls.password.dirty 
    && this.form.controls.password.invalid;
  }

  onSubmit() {
    const email = this.form.value.email;
    const password = this.form.value.password;

    console.log(this.form);
    console.log(email);
    console.log(password);
  }
}
