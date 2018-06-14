import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../todo.service';
import { ToDo } from '../to-do';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  selectedToDo: ToDo;
  addTodo: boolean = false;

  todos: Observable<ToDo[]>;

  @ViewChild('list') listRef;

  constructor(private todoService: TodoService, private db: AngularFirestore) { }

  ngOnInit() {
    this.todos = this.db.collection<ToDo>('todos').valueChanges();
  }

  onAdd(): void {
    this.addTodo = true;
  }
}
