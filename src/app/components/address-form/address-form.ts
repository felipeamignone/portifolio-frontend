import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressFormModel } from './form-model';
import { ViaCepService } from '../../services/viacep-service';

@Component({
  selector: 'app-address-form',
  imports: [FormsModule],
  templateUrl: './address-form.html',
  styleUrl: './address-form.css',
})
export class AddressForm {
  viacepService = inject(ViaCepService);

  model = new AddressFormModel('', '', '', '', '', '', '');
  isLoading = signal<boolean>(false);

  onConsultCep() {
    this.isLoading.set(true);
    console.log(`Consultando CEP: ${this.model.cep}`);

    this.viacepService.getAddressFromCep(this.model.cep).subscribe((resp) => {
      this.model.city = resp.localidade;
      this.model.streetName = resp.logradouro;
      this.model.state = resp.estado;
      this.model.neighborhood = resp.bairro;

      this.isLoading.set(false);
    })
  }

  onSubmit() {
    this.isLoading.set(true);
    console.log({ data: this.model });
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
