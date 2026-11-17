import { Component, signal } from '@angular/core';
import { TechnologyComponent } from '../technology/technology.component';
import { DUMMY_TECHNOLOGIES } from '../dummy-data/dummy-tech';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  imports: [TechnologyComponent],
})
export class TechnologiesComponent {
  readonly technologies = signal(DUMMY_TECHNOLOGIES);

}
