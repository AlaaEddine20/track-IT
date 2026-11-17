import { Component, inject, input, output } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  readonly name = input<string>();
  readonly avatarUrl = input<string>();
  readonly description = input<string>();
}
