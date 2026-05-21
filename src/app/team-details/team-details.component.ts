/**
 * team-details.component.ts
 * -------------------------
 * WHAT: A scaffolded (not yet wired-up) component intended to show the details
 *       of one selected team — its members, their roles and allocation, etc.
 *
 * STATUS: placeholder. Steps to bring it to life:
 *   1. Register a route for it in app.routes.ts (see the lazy-load example
 *      written there).
 *   2. Add an `@Input()` for the team id or the `TeamType` to display.
 *   3. Render the member list in team-details.component.html.
 *
 * ANGULAR CONCEPT: a "feature" component — one reached through routing, rather
 * than embedded directly in a parent's template like `<app-team>` is.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-team-details',
  imports: [],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamDetails {}
