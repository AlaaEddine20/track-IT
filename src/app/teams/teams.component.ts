/**
 * teams.component.ts
 * ------------------
 * WHAT: A "smart" / container component. It OWNS the list of teams and tracks
 *       which team the user has selected.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - Container vs presentational components: this one holds state and passes
 *     it down to many `<app-team>` children, which only render what they get.
 *   - Signals (`signal()`): reactive state containers. Read with `teams()`;
 *     write with `.set(...)` or `.update(...)`.
 *   - Listening to a child's output: `(selectTeam)="onTeamSelected($event)"`
 *     in the template wires the child event to the handler below.
 *
 * KEY THINGS TO REMEMBER:
 *   - Never mutate a signal's value in place. Use `.set()` (replace) or
 *     `.update()` (derive from current) so Angular sees the change. The old
 *     `mutate()` API was removed for exactly this reason.
 *   - This component decides WHICH `TeamType` matches a clicked id — the child
 *     only knows its own id and shouts it out; the parent does the lookup.
 */

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Team, TeamType } from '../team/team.component';
import { DUMMY_TEAMS } from '../dummy-data/dummy-teams';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css',
  // `imports` lists the components used in THIS component's template.
  // Standalone components declare their own dependencies — no NgModule.
  imports: [Team],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Teams {
  /**
   * The full list of teams, held in a signal so any template reading `teams()`
   * updates automatically if the list ever changes.
   * `readonly` protects the signal REFERENCE — you can still call `.set()` on
   * it; you just cannot reassign the field to a different signal.
   */
  readonly teams = signal<TeamType[]>(DUMMY_TEAMS);

  /**
   * The currently selected team, or `null` when nothing is selected yet.
   * THIS is the correct place for `| null`: selection genuinely can be absent.
   */
  readonly selectedTeam = signal<TeamType | null>(null);

  /**
   * Runs when an `<app-team>` child emits its `selectTeam` output.
   * `$event` (in the template) carries the emitted value — here, a team id.
   * `?? null` turns `find()`'s `undefined` (no match) into our `null` state.
   */
  onTeamSelected(teamId: number): void {
    const team = this.teams().find((t) => t.id === teamId) ?? null;
    this.selectedTeam.set(team);
  }
}
