/**
 * app.component.ts
 * ----------------
 * WHAT: The root component — the first component Angular renders. Every other
 *       piece of UI is nested somewhere inside its template.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - The root / bootstrap component (handed to `bootstrapApplication()` in
 *     main.ts).
 *   - Standalone components: this component declares what it uses directly in
 *     `imports` — no NgModule needed (standalone is the default in Angular
 *     v20+).
 *
 * KEY THING TO REMEMBER:
 *   - Import only what the TEMPLATE actually uses. The previous version
 *     imported `signal` and `DUMMY_TEAMS` but never used them — those dead
 *     imports have been removed.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { Teams } from './teams/teams.component';

@Component({
  selector: 'app-root',
  // The components used inside app.component.html.
  imports: [HeaderComponent, Teams],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
