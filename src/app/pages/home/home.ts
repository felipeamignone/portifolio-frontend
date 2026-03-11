import { Component } from '@angular/core';
import { Experience } from '../../components/experience/experience';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-home',
  imports: [Hero, Experience],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
