import { Technology } from '../../types';

// Angular concepts follow the 21 modules of the official "Angular AI tutor"
// https://angular.dev/ai/ai-tutor
export const DUMMY_TECHNOLOGIES: Technology[] = [
  {
    id: 1,
    name: 'Angular',
    description: 'A platform for building mobile and desktop web applications',
    avatarUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
    concepts: [
      // Phase 1: Angular Fundamentals
      {
        id: 101,
        title: 'Getting Started',
        status: 'learned',
        quiz: [
          {
            id: 1001,
            question: 'Quale comando crea un nuovo progetto Angular?',
            options: ['ng new', 'ng create', 'ng init', 'ng generate app'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 102,
        title: 'Dynamic Text with Interpolation',
        status: 'learned',
        quiz: [
          {
            id: 1002,
            question: 'Quale sintassi mostra il valore di title nel template?',
            options: ['{{ title }}', '[title]', '(title)', '${title}'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 103,
        title: 'Event Listeners',
        status: 'learned',
        quiz: [
          {
            id: 1003,
            question: 'Come ascolti il click su un bottone?',
            options: ['[click]="save()"', '(click)="save()"', 'onclick="save()"', '{{ click }}'],
            correctIndex: 1,
          },
        ],
      },
      // Phase 2: State and Signals
      {
        id: 104,
        title: 'Writable Signals: set',
        status: 'learned',
        quiz: [
          {
            id: 1004,
            question: 'Come imposti un nuovo valore in un signal?',
            options: ['count = 5', 'count.set(5)', 'count(5)', 'count.value = 5'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 105,
        title: 'Writable Signals: update',
        status: 'learned',
        quiz: [
          {
            id: 1005,
            question: 'Quando usi update() invece di set()?',
            options: [
              'Quando il nuovo valore dipende dal precedente',
              'Quando il signal è un array vuoto',
              'Quando vuoi un computed',
              'Mai, sono identici',
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 106,
        title: 'Computed Signals',
        status: 'in-progress',
        quiz: [
          {
            id: 1006,
            question: 'Quale affermazione su computed() è vera?',
            options: [
              'Si può modificare con set()',
              'È di sola lettura e si ricalcola quando cambiano i signal che legge',
              'Parte solo con effect()',
              'Serve solo per le stringhe',
            ],
            correctIndex: 1,
          },
        ],
      },
      // Phase 3: Component Architecture
      {
        id: 107,
        title: 'Template Binding (Properties & Attributes)',
        status: 'todo',
        quiz: [
          {
            id: 1007,
            question: "Come leghi in modo dinamico la src di un'immagine?",
            options: ['src="{url}"', '[src]="url"', '(src)="url"', 'src=url'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 108,
        title: 'Creating & Nesting Components',
        status: 'todo',
        quiz: [
          {
            id: 1008,
            question: 'Cosa serve al padre per usare un componente figlio standalone?',
            options: [
              'Metterlo in declarations',
              'Metterlo in imports e usare il suo selector',
              'Niente, è automatico',
              'Metterlo in providers',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 109,
        title: 'Component Inputs with Signals',
        status: 'todo',
        quiz: [
          {
            id: 1009,
            question: 'Come dichiari un input moderno?',
            options: [
              '@Input() name: string',
              'name = input<string>()',
              'name = signal<string>()',
              'name = output<string>()',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 110,
        title: 'Styling Components',
        status: 'todo',
        quiz: [
          {
            id: 1010,
            question: 'Di default, gli stili di un componente valgono per...',
            options: [
              "Tutta l'app",
              'Solo quel componente (view encapsulation)',
              'Solo i figli',
              'Solo il body',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 111,
        title: 'List Rendering with @for',
        status: 'todo',
        quiz: [
          {
            id: 1011,
            question: 'Cosa è obbligatorio scrivere in un blocco @for?',
            options: ['key', 'track', 'index', 'trackBy()'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 112,
        title: 'Conditional Rendering with @if',
        status: 'todo',
        quiz: [
          {
            id: 1012,
            question: 'Come scrivi il ramo alternativo di un @if?',
            options: ['@otherwise', '@else', '@elseif only', '@default'],
            correctIndex: 1,
          },
        ],
      },
      // Phase 4: Advanced Features & Architecture
      {
        id: 113,
        title: 'Two-Way Binding',
        status: 'todo',
        quiz: [
          {
            id: 1013,
            question: 'Quale sintassi è il two-way binding?',
            options: ['[value]="x"', '(value)="x"', '[(value)]="x"', '{{ value }}'],
            correctIndex: 2,
          },
        ],
      },
      {
        id: 114,
        title: 'Services & Dependency Injection',
        status: 'todo',
        quiz: [
          {
            id: 1014,
            question: 'Quale funzione moderna inietta un servizio?',
            options: ['inject()', 'provide()', 'require()', 'useService()'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 115,
        title: 'Basic Routing',
        status: 'todo',
        quiz: [
          {
            id: 1015,
            question: 'Dove si dichiarano le rotte?',
            options: [
              'In un array di tipo Routes (es. app.routes.ts)',
              'Nel selector del componente',
              'In index.html',
              'In styles.css',
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 116,
        title: 'Introduction to Forms',
        status: 'todo',
        quiz: [
          {
            id: 1016,
            question: 'Quale classe rappresenta un singolo campo in un reactive form?',
            options: ['FormField', 'FormControl', 'FormInput', 'NgModel'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 117,
        title: 'Intro to Angular Material',
        status: 'todo',
        quiz: [
          {
            id: 1017,
            question: 'Quale comando aggiunge Angular Material al progetto?',
            options: [
              'npm i material',
              'ng add @angular/material',
              'ng new material',
              'ng generate material',
            ],
            correctIndex: 1,
          },
        ],
      },
      // Phase 5: Signal Forms
      {
        id: 118,
        title: 'Introduction to Signal Forms',
        status: 'todo',
        quiz: [
          {
            id: 1018,
            question: 'Con quale funzione crei un Signal Form a partire da un modello?',
            options: ['form()', 'new FormGroup()', 'signalForm()', 'formControl()'],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 119,
        title: 'Submitting & Resetting',
        status: 'todo',
        quiz: [
          {
            id: 1019,
            question: "Per ripartire da un form pulito dopo l'invio, di solito...",
            options: [
              'Ricarichi la pagina',
              'Reimposti il modello ai valori iniziali',
              'Distruggi il componente',
              'Cambi il selector',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 120,
        title: 'Validation in Signal Forms',
        status: 'todo',
        quiz: [
          {
            id: 1020,
            question: 'Dove dichiari le regole di validazione di un Signal Form?',
            options: [
              'In una funzione schema passata a form()',
              'Nel CSS',
              'In app.config.ts',
              'Nel selector',
            ],
            correctIndex: 0,
          },
        ],
      },
      {
        id: 121,
        title: 'Field State & Error Messages',
        status: 'todo',
        quiz: [
          {
            id: 1021,
            question: "Quale stato dice se l'utente ha già visitato il campo?",
            options: ['touched', 'valid', 'disabled', 'value'],
            correctIndex: 0,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'TypeScript',
    description: 'A typed superset of JavaScript that compiles to plain JavaScript',
    avatarUrl: 'https://www.typescriptlang.org/icons/icon-48x48.png',
    concepts: [
      {
        id: 201,
        title: 'Union types',
        status: 'learned',
        quiz: [
          {
            id: 2001,
            question: "Cosa significa type Status = 'a' | 'b'?",
            options: ['a e b insieme', 'a oppure b', 'solo a', 'né a né b'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 202,
        title: 'Generics',
        status: 'learned',
        quiz: [
          {
            id: 2002,
            question: 'Cosa significa Array<T>?',
            options: [
              'Un array di qualsiasi cosa',
              'Un array di elementi di tipo T',
              'Un array vuoto',
              'Un array immutabile',
            ],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 203,
        title: 'unknown vs any',
        status: 'learned',
        quiz: [
          {
            id: 2003,
            question: 'Perché unknown è più sicuro di any?',
            options: [
              'È più veloce',
              'Devi controllare il tipo prima di usarlo',
              'Non esiste a runtime',
              'Accetta solo stringhe',
            ],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'RxJS',
    description: 'Reactive programming library for JavaScript',
    avatarUrl: 'https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png',
    concepts: [
      {
        id: 301,
        title: 'Observables and subscribe',
        status: 'in-progress',
        quiz: [
          {
            id: 3001,
            question: 'Quando parte un Observable "cold"?',
            options: ['Alla creazione', 'Alla subscribe', 'Al primo next', 'Mai'],
            correctIndex: 1,
          },
        ],
      },
      {
        id: 302,
        title: 'Pipe operators (map, filter)',
        status: 'todo',
        quiz: [
          {
            id: 3002,
            question: 'A cosa serve pipe()?',
            options: [
              'A iscriversi',
              'A concatenare operatori',
              'A creare un Subject',
              'A chiudere lo stream',
            ],
            correctIndex: 1,
          },
        ],
      },
    ],
  },
];
