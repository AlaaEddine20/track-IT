/**
 * app.config.ts
 * -------------
 * WHAT: Application-wide configuration handed to `bootstrapApplication()` in
 *       main.ts. With standalone components this file REPLACES the old root
 *       `AppModule`.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - `ApplicationConfig` + `providers`: register app-wide services and
 *     features here, using `provide*()` functions.
 *   - `provideRouter(routes)`: enables the Angular Router using the table
 *     defined in app.routes.ts.
 *   - `provideZoneChangeDetection({ eventCoalescing: true })`: batches DOM
 *     events so change detection runs once per event burst instead of once
 *     per individual event.
 *   - `provideBrowserGlobalErrorListeners()`: routes uncaught browser errors
 *     through Angular's error handling.
 */

import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
