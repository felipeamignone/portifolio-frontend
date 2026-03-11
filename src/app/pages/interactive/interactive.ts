import { Component } from '@angular/core';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-interactive',
  imports: [ContactForm],
  templateUrl: './interactive.html',
  styleUrl: './interactive.css',
})
export class Interactive {}
