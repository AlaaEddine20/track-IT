import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css',
})
export class TechnologyComponent {
  readonly id = input.required<number>();
  readonly name = input<string>();
  readonly avatarUrl = input<string>();
  readonly description = input<string>();
  readonly selected = output<number>();

  onSelected() {
    this.selected.emit(this.id());
  }
}
