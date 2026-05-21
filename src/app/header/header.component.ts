/**
 * header.component.ts
 * -------------------
 * WHAT: A purely presentational header — logo, app title, and tagline. It has
 *       no inputs, no outputs, and no state.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - A minimal standalone component.
 *   - `NgOptimizedImage`: Angular's directive for performant images. It is
 *     listed in `imports` so the template can use the `ngSrc` attribute, which
 *     adds lazy-loading, size hints, and warnings for common image mistakes.
 *   - OnPush change detection: trivially correct here since the component has
 *     no dynamic state to react to at all.
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
