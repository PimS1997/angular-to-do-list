import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-to-dos';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: ToDo[] = TODOS;
  test: any[] = [1,2,3];

  constructor() { }

  ngOnInit() {
    // console.log(this.todos);
  }

}
