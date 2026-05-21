/**
 * dummy-teams.ts
 * --------------
 * WHAT: Hard-coded sample data, used to build and test the UI before a real
 *       backend exists.
 *
 * ANGULAR CONCEPTS DEMONSTRATED:
 *   - Separating data from components. In a real app this data would arrive
 *     from a service — e.g. an injectable `TeamsService` that calls
 *     `HttpClient` — instead of living in a constant.
 *   - Typing data against a shared interface (`TeamType`). The annotation
 *     `: TeamType[]` makes TypeScript verify this data HERE: any team missing
 *     a field, or with a wrong type, is flagged at the source rather than
 *     surfacing as a confusing error inside a component later.
 *
 * KEY THING TO REMEMBER:
 *   - One source of truth for the shape: `TeamType`/`TeamMember` are defined
 *     in team.component.ts and reused by both this data file and the
 *     components that render it.
 */

import { TeamType } from '../team/team.component';

export const DUMMY_TEAMS: TeamType[] = [
  {
    id: 1,
    name: 'Team React',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    members: [
      { id: 11, name: 'Alice', role: 'Developer', isAllocated: true },
      { id: 26, name: 'Bob', role: 'Designer', isAllocated: true },
      { id: 39, name: 'Charlie', role: 'Project Manager', isAllocated: true },
      { id: 16, name: 'Zara', role: 'Tester', isAllocated: true },
      { id: 20, name: 'Zane', role: 'Tester', isAllocated: true },
    ],
  },
  {
    id: 2,
    name: 'Team Angular',
    avatar: 'https://angular.io/assets/images/logos/angular/angular.svg',
    members: [
      { id: 47, name: 'David', role: 'Developer', isAllocated: true },
      { id: 52, name: 'Eve', role: 'Designer', isAllocated: true },
      { id: 61, name: 'Frank', role: 'Project Manager', isAllocated: false },
      { id: 34, name: 'Zara', role: 'Tester', isAllocated: true },
    ],
  },
  {
    id: 3,
    name: 'Team Vue',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
    members: [
      { id: 789, name: 'Grace', role: 'Developer', isAllocated: true },
      { id: 80, name: 'Henry', role: 'Designer', isAllocated: false },
      { id: 9123, name: 'Ivy', role: 'Project Manager', isAllocated: false },
      { id: 1789, name: 'Yara', role: 'Tester', isAllocated: true },
    ],
  },
  {
    id: 4,
    name: 'Team Svelte',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg',
    members: [
      { id: 1010, name: 'Jack', role: 'Developer', isAllocated: true },
      { id: 12, name: 'Kate', role: 'Designer', isAllocated: true },
      { id: 129, name: 'Liam', role: 'Project Manager', isAllocated: true },
      { id: 145, name: 'Xander', role: 'Tester', isAllocated: false },
      { id: 200, name: 'Zane', role: 'Tester', isAllocated: true },
    ],
  },
  {
    id: 5,
    name: 'Team SQL',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
    members: [  
      { id: 123, name: 'Mia', role: 'Developer', isAllocated: true },
      { id: 1489, name: 'Noah', role: 'Designer', isAllocated: true },
      { id: 1523, name: 'Olivia', role: 'Project Manager', isAllocated: true },
      { id: 192, name: 'Wendy', role: 'Tester', isAllocated: true },
    ],
  }
];
