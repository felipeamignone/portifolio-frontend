import { Component } from '@angular/core';
import { ContactForm } from '../../components/contact-form/contact-form';
import { AddressForm } from '../../components/address-form/address-form';

@Component({
  selector: 'app-interactive',
  imports: [ContactForm, AddressForm],
  templateUrl: './interactive.html',
  styleUrl: './interactive.css',
})
export class Interactive {}
