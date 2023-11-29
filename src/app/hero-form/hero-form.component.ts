import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here



import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  powers:Array<string> = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted:boolean = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }


}
