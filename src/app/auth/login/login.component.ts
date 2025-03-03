import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    const values = formData.form.value;
    const email = values.email;
    const password = values.password;
  }
}
