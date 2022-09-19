import {trigger, transition, query, style, stagger, animate} from '@angular/animations';

export class Todo{
  content!:string;
  completed!:boolean;
}

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({opacity: 0}),
      stagger('60ms', animate('600ms ease', style({opacity: 1})))
    ],
    {optional: true}
    )
  ]),

  query(':leave', [
    animate('200ms ease',
     style({opacity: 0})
    )
  ], {optional: true})
])