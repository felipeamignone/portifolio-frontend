import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Hero} from './hero/hero';
import {Experience} from './experience/experience';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portifolio');
}
