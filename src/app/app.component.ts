import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TechnologiesComponent } from './technologies/technologies.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, TechnologiesComponent],
})
export class AppComponent {}
