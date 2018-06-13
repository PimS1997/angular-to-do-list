import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../to-do';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  selectedToDo: ToDo;
  addTodo: boolean = false;

  todos: ToDo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    // console.log(this.todos);
    this.getTodos();
  }

  getTodos(): void{
    this.todos = this.todoService.getTodos();
  }

  onAdd(): void{
    console.log("Hello");
    this.addTodo = true;
  }

  onSelect(todo: ToDo): void{
    
  }

}
