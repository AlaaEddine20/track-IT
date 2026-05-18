import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DUMMY_TEAMS } from './dummy-data/dummy-teams';
import { Teams } from "./teams/teams.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, Teams],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  teams = DUMMY_TEAMS;
}
