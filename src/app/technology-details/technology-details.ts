import { Component, input } from '@angular/core';
import { Technology } from '../technology/technology.model';

@Component({
  selector: 'app-technology-details',
  imports: [],
  templateUrl: './technology-details.html',
  styleUrl: './technology-details.css',
})
export class TechnologyDetails {
  readonly technology = input<Technology | null>();
}
