import { afterNextRender, Component, DestroyRef, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule]
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  
  constructor(private destroyRef: DestroyRef) {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');

      if(savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;

        setTimeout(() => {
          this.form().controls['email'].setValue(savedEmail);
        }, 1);
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500))
      .subscribe({
        next: (value) => window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email }))
      });

      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    const values = formData.form.value;
    const email = values.email;
    const password = values.password;

    if(formData.form.invalid) {
      return;
    }

    formData.form.reset();

  }
}
