import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { ContactFormModel } from './form-model';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  model = new ContactFormModel('', '', '', '');
  isSubmitting = signal<boolean>(false);

  onSubmit(): void {
    this.isSubmitting.set(true);
    console.log(this.model);
    setTimeout(() => {
      this.isSubmitting.set(false);
    }, 2000);
  }
}
