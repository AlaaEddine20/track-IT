/**
 * team.component.ts
 * -----------------
 * WHAT: A presentational ("dumb") component that renders a single team card —
 *       avatar, name, member count, and a "Select" button.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - Component: the basic UI building block (a `@Component` decorator + a
 *     class + a template).
 *   - `@Input()`: marks a class property as data the PARENT passes in. This is
 *     the standard, most widely-used way to receive data in production Angular
 *     codebases.
 *     (Angular 17.1+ introduced signal inputs — `input()` / `input.required()`
 *     — as a newer alternative, but the `@Input()` decorator remains the norm
 *     in most projects you will encounter.)
 *   - `@Output()` + `EventEmitter`: marks a property the child uses to send
 *     events UP to the parent.
 *     (Angular 17.3+ introduced the `output()` function as a newer
 *     alternative; `@Output()` is still the standard.)
 *   - OnPush change detection: re-render only when an `@Input()` reference
 *     changes (or an event / async pipe fires) — a major performance win.
 *
 * KEY THINGS TO REMEMBER:
 *   - A "presentational" component owns no application data of its own. It
 *     receives data through @Inputs and reports user actions through @Outputs.
 *     The parent (`Teams`) owns the real state. This one-way data flow —
 *     data down, events up — is the heart of Angular's component architecture.
 *   - With `@Input()`, values are PLAIN properties: read them as
 *     `this.teamName` in code, and as `teamName` in the template — no
 *     parentheses (unlike signal inputs, which are called like `teamName()`).
 *   - GOTCHA (fixed here): the previous version placed the `@Component`
 *     decorator on a `type` alias. Decorators can ONLY decorate a class, and
 *     the decorator must sit directly above that class — so it was a compile
 *     error (TS1206). It now sits on the `Team` class where it belongs.
 *   - GOTCHA: an `@Output()` must be an `EventEmitter` you call `.emit()` on —
 *     never a plain data value.
 */

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * A single person belonging to a team.
 * A plain `interface` (no `null`) — a member always has a complete shape.
 */
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  isAllocated: boolean;
}

/**
 * The shape of one team.
 *
 * GOTCHA: the previous version declared this as `{ ... } | null`. Baking the
 * "no team" case (`null`) into the type itself forces EVERY consumer to
 * null-check, even where a team definitely exists (e.g. items inside a list).
 * Prefer a clean, always-valid type here, and add `| null` only at the one
 * spot that genuinely needs it — see `selectedTeam` in teams.component.ts.
 */
export interface TeamType {
  id: number;
  name: string;
  avatar: string;
  members: TeamMember[];
}

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  // OnPush = only re-render when an @Input reference changes (or an event /
  // async pipe fires). Recommended for every component.
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Team {
  // --- Inputs: data flowing IN, from the parent (`Teams`) -------------------
  // `{ required: true }` makes Angular report a build-time error if the parent
  // forgets to bind the value. The `!` (definite assignment assertion) tells
  // TypeScript "Angular will set this before first use" — the class itself
  // never initialises these fields.
  @Input({ required: true }) id!: number;
  @Input({ required: true }) teamName!: string;
  @Input({ required: true }) teamAvatar!: string;
  @Input({ required: true }) teamMembers!: TeamMember[];

  // --- Output: an event flowing OUT, to the parent --------------------------
  // The template calls `selectTeam.emit(value)`; the parent reacts via
  // `(selectTeam)="..."`. The generic `<number>` types the emitted payload.
  @Output() selectTeam = new EventEmitter<number>();
}
