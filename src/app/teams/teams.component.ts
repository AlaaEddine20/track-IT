import { Component, Input, signal } from '@angular/core';
import { Team } from '../team/team.component';
import { DUMMY_TEAMS } from '../dummy-data/dummy-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
  imports: [Team],
})
export class Teams {
  // This component will display the list of teams
  teams = signal(DUMMY_TEAMS);
}
