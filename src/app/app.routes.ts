/**
 * app.routes.ts
 * -------------
 * WHAT: The application's route table. Currently empty — the app renders a
 *       single screen with no navigation yet.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - `Routes`: an array that maps URL paths to the component to display.
 *   - Lazy loading (best practice): load a feature's code only when its route
 *     is first visited, which keeps the initial bundle small. Example for the
 *     scaffolded team-details component:
 *
 *       export const routes: Routes = [
 *         {
 *           path: 'teams/:id',
 *           loadComponent: () =>
 *             import('./team-details/team-details.component')
 *               .then((m) => m.TeamDetails),
 *         },
 *       ];
 *
 *   `loadComponent` + a dynamic `import()` is what makes the route lazy.
 */

import { Routes } from '@angular/router';

export const routes: Routes = [];
