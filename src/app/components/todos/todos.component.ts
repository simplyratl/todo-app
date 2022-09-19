import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

const fadeInOut = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0, translate: '20% 0' }),
    animate('0.5s ease', style({ opacity: 1, translate: '0 0' })),
  ]),
  transition(':leave', [
    style({ opacity: 1, translate: '0 0' }),
    animate('0.5s ease', style({ opacity: 0, translate: '-20% 0' })),
  ]),
]);

const fadeInEmpty = trigger('fadeInEmpty', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('0.5s ease', style({ opacity: 0 })),
  ]),
]);

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [fadeInOut, fadeInEmpty],
})
export class TodosComponent implements OnInit {
  todos!: Todo[];

  inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Finish essay collaboration',
        completed: false,
      },
      {
        content: 'Read the next chapter of book in Danish',
        completed: true,
      },
    ];
  }

  toggleDone(id: number): void {
    this.todos.map((value, i) => {
      if (i === id) value.completed = !value.completed;
    });
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo, index) => index != id);
  }

  addTodo() {
    if (this.inputTodo.length === 0) return;

    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });

    this.inputTodo = '';
  }
}
