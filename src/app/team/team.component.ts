import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class Team {
  @Input() teamName!: string;
  @Input() teamAvatar!: string;

  selectedTeam: Team | null = null;

  onSelectTeam() {
    // This method will be called when the user clicks the "Select" button
    console.log(`Selected team: ${this.teamName}`);
    this.selectedTeam = this;
  }

}