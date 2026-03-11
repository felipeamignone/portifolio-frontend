import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressFormModel } from './form-model';

@Component({
  selector: 'app-address-form',
  imports: [FormsModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css',
})
export class AddressForm {
  model = new AddressFormModel('', '', '', '', '', '', '');
  isLoading = signal<boolean>(false);

  onConsultCep() {
    this.isLoading.set(true);
    console.log(`Consultando CEP: ${this.model.cep}`);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }

  onSubmit() {
    this.isLoading.set(true);
    console.log({ data: this.model });
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
