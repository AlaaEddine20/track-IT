import { Component, input, signal } from '@angular/core';
import { TechnologyComponent } from '../technology/technology.component';
import { DUMMY_TECHNOLOGIES } from '../dummy-data/dummy-tech';
import { TechnologyDetails } from '../technology-details/technology-details';
import { Technology } from '../technology/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  imports: [TechnologyComponent, TechnologyDetails],
})
export class TechnologiesComponent {
  readonly technologies = signal(DUMMY_TECHNOLOGIES);
  readonly selectedTechnology = signal<Technology | null>(null);

  onSelect(id: number) {
    const technology = this.technologies().find((t) => t.id === id);
    this.selectedTechnology.set(technology || null);
  }
}
